import React, { useEffect, useRef, useState } from "react"
import MetaTags from "react-meta-tags"
import { Button, Col, Container, Row, Table, Input, Card, CardBody, Pagination, PaginationItem, PaginationLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { isEmpty } from "lodash"
import Flatpickr from "react-flatpickr"
import moment from 'moment';
import { Link } from "react-router-dom"
import 'flatpickr/dist/flatpickr.min.css';
import { get, patch, remove } from "../../components/helpers/api_helper"
import { toast } from "react-toastify"
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const Dashboard = () => {
  const dateRangeRef = useRef()
  const [data, setData] = useState({})
  const [period, setPeriod] = useState({})
  const [defaultDate, setDefaultDate] = useState([])
  const [message, setMessage] = useState(null)
  const [modal, setModal] = useState(false);
  const [id, setId] = useState([])
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteEnabled, setDeleteEnabled] = useState(false)
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)

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
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false)
    }
  };

  const handlePageChange = (pageUrl, newPage) => {
    fetchData(pageUrl);
    setCurrentPage(newPage);
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
      }, 200);
    }
  };

  const loadPage = (page) => {
    if (page && page !== currentPage) {
      //api call
      setCurrentPage(page)
    }
  }

  const onPeriodChange = (period) => {
    let now = moment.utc();
    let start, end;

    start = now.clone().subtract(period, 'days').format('YYYY-MM-DD');
    end = now.clone().format('YYYY-MM-DD');

    // onDaterangeChange([start, end]);
    // dateRangeRef.current.flatpickr.clear();
    setPeriod({
      value: period,
      start: start,
      end: end
    });
    setDefaultDate([start, end]);
  }

  const handleClick = (msg) => {
    setMessage(msg)
    tog_modal()
  }

  const onDelete = async () => {
    let updatedData = [...data.results];

    try {
      const response = await remove("/form/items", [id]);

      if (response.ok) {
        updatedData = updatedData.filter((item) => item._id !== id);
        toggleDelete()
        setDeleteEnabled(false)
        setData({ ...data, results: updatedData });
        toast.success("Record deleted successfully!");
      } else {
        toast.error("Error deleting record");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const generatePDF = () => {
    const headers = ['Index', 'Name', 'Email', 'Mobile', 'Subject', 'Status', 'Created Date', 'Message'];
    const doc = new jsPDF('l');

    const headStyles = { fillColor: [62, 191, 238] };
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(62, 191, 238);
    doc.text('NAFAL HVAC', 14, 10);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Generated on: ' + moment().format('lll'), 14, 22);
    doc.text('Duration: 1 April 2020 to 31 March 2021', 14, 16);

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
      2: { cellWidth: 59 },
      3: { cellWidth: 28 },
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

    if (isEmpty(data?.results)) {
      // Show message when no records are found
      const text = 'No records found';
      const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      const x = (doc.internal.pageSize.width - textWidth) / 2;
      const y = doc.internal.pageSize.height / 2;

      doc.setFontSize(14);
      doc.text(text, x, y);
      doc.save('empty_table.pdf');
      return;
    }

    doc.save('table.pdf');
  };

  const updateStatusById = (id, newStatus) => {
    setData(prevData => ({
      ...prevData,
      results: prevData.results.map(item => (
        item._id === id ? { ...item, status: newStatus } : item
      )),
    }));
  };

  const updateStatus = async (id, selectedStatus) => {
    if (!selectedStatus) {
      toast.error('Please select a status before updating.');
      return;
    }

    try {
      const response = await patch('/form/update/status', { id, status: selectedStatus })
      if (response?.ok) {
        toast.success('Status updated successfully');
        updateStatusById(id, response?.result?.status)
      }
    } catch (error) {
      toast.error(error);
    }
  };



  return (
    <React.Fragment>
      <div className="page-content wrapper d-flex flex-column" style={{ marginTop: "60px", minHeight: "83vh" }}>
        <MetaTags>
          <title>Dashboard | Nafal</title>
        </MetaTags>
        <Container fluid>
          <Row>
            <Col xs="12">
              {false ? (
                <p className="text-center text-danger mt-4">{"error"}</p>
              ) : (
                <Card>
                  <CardBody>
                    <Row className="mb-2 d-flex justify-content-between">
                      <Col md={"4"}>
                        <div className="search-box mb-2 d-inline-block">
                          <div className="position-relative">
                            <input
                              className="form-control"
                              type="search"
                              onInput={(e) => searchBar(e.target.value)}
                              placeholder={"Search here..."}
                            />
                            <i className="uil uil-search search-icon" style={{ marginTop: "2px" }}></i>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-end">
                          <div className="ms-2 text-start">
                            <Button color="primary" className="btn btn-primary btn-sm me-2 mb-1" id="sa-success">
                              Refresh
                            </Button>
                            <Button color="success" className="btn btn-success btn-sm me-2 mb-1" id="sa-success" onClick={generatePDF}>
                              Download
                            </Button>

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
                                  defaultDate: "11-02-2023"
                                }}
                              />
                            </InputGroup>
                          </div>
                          <div className="ms-2 text-end">
                            <Button
                              className="btn-sm me-1 mb-1"
                              color={period.value === 30 ? 'primary' : 'light'}
                              onClick={() => onPeriodChange(30)}
                            >
                              1 Month
                            </Button>
                            <Button
                              className="btn-sm me-1 mb-1"
                              color={period.value === 90 ? 'primary' : 'light'}
                              onClick={() => onPeriodChange(90)}
                            >
                              3 Months
                            </Button>
                            <Button
                              className="btn-sm mb-1"
                              color={period.value === 90 ? 'primary' : 'light'}
                              onClick={() => onPeriodChange(90)}
                            >
                              6 Months
                            </Button>
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
                                <th>Index</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Subject</th>
                                <th>Status</th>
                                <th>Created Time</th>
                                <th>Message</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                loading ? (
                                  <tr>
                                    <td colSpan="9" className="react-bs-table-no-data" style={{ padding: "3px" }}>
                                      <p className="text-center mt-3">Fetching contact form data... Please wait.</p>
                                    </td>
                                  </tr>
                                ) : (
                                  data?.results?.length > 0 ? (
                                    data?.results?.map((item, index) => (
                                      <tr key={index}>
                                        <td>{1 + index}</td>
                                        <td><Link to="#" onClick={() => handleClick(item.Message)}>{item.name?.substring(0, 22)}</Link></td>
                                        <td>{item.email?.substring(0, 30)}</td>
                                        <td>{item?.mobile?.toString()?.slice(0, 12)}</td>
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
                                          <UncontrolledDropdown className="ms-auto">
                                            <DropdownToggle className="text-muted font-size-16" color="white">
                                              <i className="mdi mdi-dots-horizontal"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                              <Link className="dropdown-item" to="#" onClick={() => handleClick(item.Message)}>
                                                View
                                              </Link>
                                              <Link className="dropdown-item" to="#" onClick={() => handleDelete(item._id)}>
                                                Remove
                                              </Link>
                                            </DropdownMenu>
                                          </UncontrolledDropdown>
                                        </td>
                                      </tr>
                                    )
                                    )
                                  ) : (
                                    <tr>
                                      <td colSpan="9" className="react-bs-table-no-data" style={{ padding: "3px" }}>
                                        <p className="text-center mt-3">No Data Available!</p>
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
                              {data?.count > 10 && (
                                <Pagination className="pagination justify-content-end mb-0">
                                  {
                                    !isEmpty(prevPage) && (
                                      <PaginationItem disabled={!prevPage}>
                                        <PaginationLink previous href="#" onClick={() => handlePageChange(prevPage, currentPage - 1)}>
                                          Prev
                                        </PaginationLink>
                                      </PaginationItem>
                                    )
                                  }

                                  {Array.from({ length: Math.ceil(data?.count / 10) }, (_, index) => (
                                    <PaginationItem key={index + 1} active={index + 1 === currentPage}>
                                      <PaginationLink
                                        href="#"
                                        onClick={() => handlePageChange(`/form?page=${index + 1}&limit=10`, index + 1)}
                                      >
                                        {index + 1}
                                      </PaginationLink>
                                    </PaginationItem>
                                  ))}

                                  {
                                    !isEmpty(nextPage) && (
                                      <PaginationItem disabled={!nextPage}>
                                        <PaginationLink next href="#" onClick={() => handlePageChange(nextPage, currentPage + 1)}>
                                          Next
                                        </PaginationLink>
                                      </PaginationItem>
                                    )
                                  }
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
                            Full Message
                          </ModalHeader>
                          <ModalBody>
                            <div className="bg-white p-3 rounded box-shadow">
                              <p className="text-muted mb-0">{message}</p>
                            </div>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="secondary" onClick={tog_modal} type="button">Close</Button>
                          </ModalFooter>
                        </Modal>
                      ) : null}

                    </Row>
                    <Row>
                      <Col>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              )}
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
                Confirm Deletion
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