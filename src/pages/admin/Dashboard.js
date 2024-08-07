import React, { useEffect, useRef, useState } from "react"
import MetaTags from "react-meta-tags"
import { Button, Col, Container, Row, Table, Input, Card, CardBody, Pagination, PaginationItem, PaginationLink, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap"
import { isEmpty } from "lodash"
import Flatpickr from "react-flatpickr"
import moment from 'moment';
import { Link } from "react-router-dom"
import 'flatpickr/dist/flatpickr.min.css';
import { get, update, remove } from "../../components/helpers/api_helper"
import { toast } from "react-toastify"
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { getStatusClass } from "../../components/utils/common"
import * as XLSX from "xlsx";

const Dashboard = () => {
  const dateRangeRef = useRef()
  const inputRef = useRef()
  const [data, setData] = useState({})
  const [period, setPeriod] = useState({})
  const [defaultDate, setDefaultDate] = useState([])
  const [viewRecord, setViewRecord] = useState({})
  const [modal, setModal] = useState(false);
  const [id, setId] = useState([])
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteEnabled, setDeleteEnabled] = useState(false)
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [isFilterMode, setIsFilterMode] = useState(false)
  const [periodDropdown, setPeriodDropdown] = useState(false);
  const [downloadDropdown, setDownloadDropdown] = useState(false);

  function toggleDelete(state = true) {
    setDeleteModal(!state)
  }

  const handleDelete = (id) => {
    setId(id)
    toggleDelete(false)
  }

  function tog_modal() {
    setModal(!modal)
  };

  const fetchData = async (url = '/form') => {
    setLoading(true)
    try {
      const data = await get(url);
      setData(data);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setIsFilterMode(data.isFiler)
    } catch (error) {
      toast.error("Error fetching data. Please refresh and check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const loadPage = (pageUrl, newPage) => {
    if (newPage && newPage !== currentPage) {
      fetchData(pageUrl);
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  var suTo = null;

  const searchBar = (value) => {
    value = value.trim();
    if (value == '' || value.length > 1) {
      clearTimeout(suTo);
      suTo = setTimeout(() => {
        fetchData(`/form/?search=${value}`)
        setCurrentPage(1)
      }, 200);
    }
  };

  const onPeriodChange = (period) => {
    let now = moment.utc();
    let start, end;

    start = now.clone().subtract(period, 'days').format('YYYY-MM-DD');
    end = now.clone().format('YYYY-MM-DD');

    onDateRangeChange([start, end]);
    dateRangeRef.current.flatpickr.clear();
    inputRef.current.value = '';
    setPeriod({
      value: period,
      start: start,
      end: end
    });
    setDefaultDate([start, end]);
  }

  const handleClick = (obj) => {
    setViewRecord(obj)
    tog_modal()
  }

  const onDelete = async () => {
    let updatedData = [...data.results];

    try {
      const response = await remove("/form/delete", [id]);

      if (response.ok) {
        updatedData = updatedData.filter((item) => item._id !== id);
        toggleDelete()
        setDeleteEnabled(false)
        setData({ ...data, results: updatedData });
        toast.success("Record deleted successfully!");
        fetchData(`/form?page=${currentPage}`)
      } else {
        toast.error("Error deleting record");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const formatDateRange = (dateStrings) => {
    const dates = dateStrings?.map((dateString) => moment(dateString));
    const minDate = moment.min(dates);
    const maxDate = moment.max(dates);
    const formattedMinDate = minDate?.format('D MMMM YYYY');
    const formattedMaxDate = maxDate?.format('D MMMM YYYY');

    if (!formattedMinDate && !formattedMaxDate) {
      return "Not Available"
    } else {
      const output = `${formattedMinDate} to ${formattedMaxDate}`;
      return output;
    }
  };

  const generateExcel = () => {
    const excelData = data.results?.map((item) => ({
      "Name": item?.name,
      "Email": item?.email,
      "Mobile": item?.mobile,
      "Subject": item?.subject,
      "Status": item?.status,
      "Created At": moment(item?.date).format("MMM D, YYYY"),
      "Message": item?.comments,
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);

    const columnWidths = [
      { wch: 20 },
      { wch: 32 },
      { wch: 15 },
      { wch: 25 },
      { wch: 10 },
      { wch: 13 },
      { wch: 1000 },
    ];

    ws["!cols"] = columnWidths;

    const firstRow = 2;
    const lastRow = firstRow + excelData.length - 1;

    for (let i = firstRow; i <= lastRow; i++) {
      ["A", "B", "C", "D", "E", "F", "G"].forEach((col) => {
        const cellRef = col + i;
        const cell = ws[cellRef];

        cell.s = { alignment: { vertical: 'top', horizontal: 'left' } };
      });
    }

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, `contact_form_${moment().format("YYYY-MM-DD")}.xlsx`);
  };


  const generatePDF = () => {
    if (!data || isEmpty(data.results)) {
      const doc = new jsPDF();
      const text = 'No records found';
      const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      const x = (doc.internal.pageSize.width - textWidth) / 2;
      const y = doc.internal.pageSize.height / 2;

      doc.setFontSize(14);
      doc.text(text, x, y);
      doc.save('empty_table.pdf');
      return;
    }

    const dateStrings = data?.results?.map((item) => item.date);
    const duration = formatDateRange(dateStrings);

    const headers = ['S.No', 'Name', 'Email', 'Mobile', 'Subject', 'Status', 'Created Date', 'Message'];
    const doc = new jsPDF('l');

    const headStyles = { fillColor: [62, 191, 238] };
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(62, 191, 238);
    doc.text('Etqan NAFAL HVAC', 14, 10);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Generated on: ' + moment().format('lll'), 14, 22);
    doc.text(`Duration: ${duration}`, 14, 16);

    const modifiedData = data?.results?.map((item, index) => ([
      1 + index,
      item.name,
      item.email,
      item?.mobile,
      item.subject,
      item.status,
      item?.date ? moment(item?.date).format('MMM D, YYYY') : "Not Available",
      item.comments,
    ]));

    const columnStyles = {
      0: { cellWidth: 14 },
      1: { cellWidth: 35 },
      2: { cellWidth: 57 },
      3: { cellWidth: 29 },
      4: { cellWidth: 38 },
      5: { cellWidth: 19 },
      6: { cellWidth: 26 },
      7: { cellWidth: 52 },
    };

    doc.autoTable({
      head: [headers],
      body: modifiedData,
      startY: 25,
      rowPageBreak: 'auto',
      bodyStyles: { valign: 'top' },
      columnStyles: columnStyles,
      theme: 'grid',
      headStyles,
      startY: 35,
    });

    doc.save(`contact_form_${moment().format("YYYY-MM-DD")}.pdf`);
  };

  const updateStatusById = (id, newStatus) => {
    setData(prevData => ({
      ...prevData,
      results: prevData?.results?.map(item => (
        item._id === id ? { ...item, status: newStatus } : item
      )),
    }));
  };

  const updateStatus = async (id, selectedStatus) => {
    if (!selectedStatus) {
      toast.error('Select a status before updating.');
      return;
    }

    try {
      const response = await update('/form/update', { id, status: selectedStatus })
      if (response?.ok) {
        toast.success('Status updated successfully');
        updateStatusById(id, response?.result?.status)
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const onDateRangeChange = (dateRange) => {
    if (!isEmpty(dateRange)) {
      setCurrentPage(1)
      let [start_date, end_date] = [moment(dateRange[0]), moment(dateRange[1])]
      let date_ranges = [start_date.format("YYYY-MM-DD"), end_date.format("YYYY-MM-DD")]
      setDefaultDate([date_ranges[0], date_ranges[1]])
      fetchData(`/form/filter?date=${date_ranges[0]}&date_end=${date_ranges[1]}`)
      setPeriod({})
      inputRef.current.value = '';
    }
  }

  const handleRefresh = () => {
    fetchData(`/form?page=${currentPage}`)
    dateRangeRef.current.flatpickr.clear();
    inputRef.current.value = '';
    setPeriod({})
  }

  return (
    <React.Fragment>
      <div className="page-content wrapper d-flex flex-column" style={{ marginTop: "60px", minHeight: "83vh" }}>
        <MetaTags>
          <title>Dashboard | Etqan Nafal</title>
        </MetaTags>
        <Container fluid>
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <Row className="d-flex justify-content-between align-items-center">
                    <Col md={"4"}>
                      <div className="search-box mt-2 mb-2 d-inline-block">
                        <div className="position-relative">
                          <input
                            className="form-control"
                            type="search"
                            onInput={(e) => searchBar(e.target.value)}
                            placeholder={"Search here..."}
                            ref={inputRef}
                          />
                          <i className="uil uil-search search-icon" style={{ marginTop: "2px" }}></i>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className={`d-flex ${window.innerWidth <= 767 ? 'justify-content-start' : 'justify-content-end'}`}>
                        <Button color="primary" className="btn btn-primary btn-sm mb-1" id="sa-success"
                          onClick={handleRefresh}
                          disabled={loading}
                        >
                          Refresh
                        </Button>
                        <div className="ms-2 text-start">
                          <Dropdown isOpen={downloadDropdown} toggle={() => setDownloadDropdown(!downloadDropdown)} direction="down">
                            <DropdownToggle caret color="success" size="sm">
                              Download &nbsp;<i className="bx bx-caret-down" />
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem
                                onClick={generatePDF}
                                disabled={loading || !data?.results?.length}
                              >
                                Export PDF
                              </DropdownItem>
                              <DropdownItem
                                onClick={generateExcel}
                                disabled={loading || !data?.results?.length}
                              >
                                Export Excel
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                        <div className="ms-2 me-2 text-center">
                          <InputGroup>
                            <Flatpickr
                              className="form-control form-control-sm"
                              placeholder="Select date range"
                              options={{
                                mode: "range",
                                dateFormat: "Y-m-d",
                                minDate: "2000-01",
                                maxDate: "today",
                                defaultDate: []
                              }}
                              ref={dateRangeRef}
                              value={defaultDate || []}
                              onClose={onDateRangeChange}
                            />
                          </InputGroup>
                        </div>
                        <div className="text-sm">
                          <Dropdown isOpen={periodDropdown} toggle={() => setPeriodDropdown(!periodDropdown)} direction="down">
                            <DropdownToggle caret color="primary" size="sm">
                              Period &nbsp;<i className="bx bx-caret-down" />
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem
                                data-toggle="modal"
                                onClick={() => onPeriodChange(30)}
                                disabled={period.value === 30 ? true : false}
                              >
                                Last Month
                              </DropdownItem>
                              <DropdownItem
                                data-toggle="modal"
                                onClick={() => onPeriodChange(90)}
                                disabled={period.value === 90 ? true : false}
                              >
                                Last 3 Months
                              </DropdownItem>
                              <DropdownItem
                                data-toggle="modal"
                                onClick={() => onPeriodChange(180)}
                                disabled={period.value === 180 ? true : false}
                              >
                                Last 6 Months
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="table-responsive">
                        <Table id="dashboard-table">
                          <thead className="thead-light text-capitalize">
                            <tr>
                              <th>S.No</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Mobile</th>
                              <th>Subject</th>
                              <th>Status</th>
                              <th>Created At</th>
                              <th>Message</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              loading ? (
                                <tr>
                                  <td colSpan="9" className="react-bs-table-no-data" style={{ padding: "3px" }}>
                                    <p className="text-center mt-5 mb-5">
                                      Fetching data... <i className="bx bx-hourglass bx-spin font-size-16 align-middle me-2"></i>
                                    </p>
                                  </td>
                                </tr>
                              ) : (
                                data?.results?.length > 0 ? (
                                  data?.results?.map((item, index) => (
                                    <tr key={index}>
                                      <td>{1 + index}</td>
                                      <td><Link to="#" onClick={() => handleClick(item)}>{item.name?.substring(0, 22)}</Link></td>
                                      <td>{item.email?.substring(0, 30)}</td>
                                      <td>
                                        {item?.mobile?.toString()?.slice(0, 12).replace(/^(\+)/, '\u202D$1')}
                                      </td>
                                      <td>{item.subject?.substring(0, 20)}</td>
                                      <td>
                                        <select
                                          value={item?.status}
                                          onChange={(e) => updateStatus(item?._id, e.target.value)}
                                          style={{ border: 'none', outline: 'none', backgroundColor: 'transparent', padding: '0' }}
                                          className="text-start"
                                        >
                                          <option value="pending">Pending</option>
                                          <option value="contacted">Contacted</option>
                                          <option value="resolved">Resolved</option>
                                        </select>
                                      </td>
                                      <td>
                                        <Link
                                          title={item?.date && moment(item?.date).format('lll')}
                                          to="#"
                                          className="text-reset"
                                        >
                                          {item?.date ? moment(item?.date).format('MMM D, YYYY') : "Not Available"}
                                        </Link>
                                      </td>
                                      <td>{item.comments.substring(0, 20)}</td>
                                      <td>
                                        <i className="bx bx-trash-alt text-danger" onClick={() => handleDelete(item._id)} />
                                      </td>
                                    </tr>
                                  )
                                  )
                                ) : (
                                  <tr>
                                    <td colSpan="9" className="react-bs-table-no-data" style={{ padding: "3px" }}>
                                      <p className="text-center mt-5 mb-5">
                                        No records existed
                                      </p>
                                    </td>
                                  </tr>
                                )
                              )
                            }
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                    <div className="pagination-container">
                      <Container fluid>
                        <Row>
                          <Col xs="12">
                            {data?.count > 15 && (
                              <Pagination className="pagination justify-content-end mb-0">
                                {!isEmpty(prevPage) && (
                                  <PaginationItem disabled={!prevPage}>
                                    <PaginationLink previous href="#" onClick={() => loadPage(prevPage, currentPage - 1)}>
                                      Prev
                                    </PaginationLink>
                                  </PaginationItem>
                                )}
                                {Array.from({ length: Math.ceil(data?.count / 15) }, (_, index) => {
                                  const pageNo = index + 1;
                                  const totalPages = Math.ceil(data?.count / 15);
                                  const visiblePages = 5;
                                  const startPage = Math.max(1, Math.min(currentPage - Math.floor(visiblePages / 2), totalPages - visiblePages + 1));
                                  const endPage = Math.min(startPage + visiblePages - 1, totalPages);
                                  if (pageNo >= startPage && pageNo <= endPage) {
                                    const endpoint = isFilterMode
                                      ? `/form/filter?page=${pageNo}&date=${defaultDate[0]}&date_end=${defaultDate[1]}`
                                      : `/form?page=${pageNo}`;
                                    return (
                                      <PaginationItem key={pageNo} active={pageNo === currentPage}>
                                        <PaginationLink href="#" onClick={() => loadPage(endpoint, pageNo)}>
                                          {pageNo}
                                        </PaginationLink>
                                      </PaginationItem>
                                    );
                                  }
                                  return null;
                                })}
                                {!isEmpty(nextPage) && (
                                  <PaginationItem disabled={!nextPage}>
                                    <PaginationLink next href="#" onClick={() => loadPage(nextPage, currentPage + 1)}>
                                      Next
                                    </PaginationLink>
                                  </PaginationItem>
                                )}
                              </Pagination>
                            )}
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    {modal ? (
                      <Modal
                        id="LoginForm"
                        tabIndex="-1"
                        isOpen={modal}
                        toggle={() => {
                          tog_modal()
                        }}
                        centered
                      >
                        <ModalHeader
                          toggle={tog_modal}
                          role="dialog"
                          autoFocus={true}
                          className="border-bottom"
                        >
                          {viewRecord?.name}
                          <Link
                            to="#"
                            className={`btn ms-4 btn-sm ${getStatusClass(viewRecord?.status)}`}
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title={viewRecord?.date && moment(viewRecord?.date).format('lll')}
                          >
                            {viewRecord?.status}
                          </Link>
                        </ModalHeader>
                        <ModalBody>
                          <div className="bg-light p-4 rounded box-shadow">
                            <p className="mb-2">Subject: {viewRecord?.subject}</p>
                            <p className="mb-2">Email: {viewRecord?.email}</p>
                            <p className="mb-2">Mobile: {viewRecord?.mobile}</p>
                            <p className="mb-0">Message: {viewRecord?.comments}</p>
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={tog_modal} type="button">Close</Button>
                        </ModalFooter>
                      </Modal>
                    ) :
                      null
                    }
                  </Row>
                  <Row>
                    <Col>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal isOpen={deleteModal} toggle={toggleDelete} backdrop="static">
        <ModalHeader toggle={toggleDelete} tag="h5">
          Warning: Before deleting the record, please consider the following:
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col className="col-12">
              {false &&
                <p className="text-danger text-center"></p>
              }
              <>
                <ul>
                  <li>If the record is removed, you cannot recover it.</li>
                  <li>If any data linked to this record will be permanently deleted.</li>
                </ul>
              </>
              <p>Type <i><b>delete permanently</b></i> to proceed with the delete operation</p>
            </Col>
          </Row>
          <Row>
            <Col className="col-12">
              <div className="mb-3">
                <Input
                  name="confirmation-text"
                  type="text"
                  className="form-control border-1 border-secondary"
                  required={false}
                  onChange={(e) => setDeleteEnabled(e.target.value === "delete permanently")}
                  placeholder="Type 'delete permanently' here"
                />
              </div>
            </Col>
          </Row>
          <Row className="float-end">
            <Col>
              <button type="button" className="btn btn-danger btn-sm me-2"
                disabled={!deleteEnabled}
                onClick={onDelete}>
                Confirm Delete
              </button>
              <button type="button" className="btn btn-light btn-sm" onClick={toggleDelete}>
                Cancel
              </button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>

    </React.Fragment>
  )
}

export default Dashboard