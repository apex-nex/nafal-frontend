import React, { useEffect, useRef, useState } from "react"
import MetaTags from "react-meta-tags"
import { Button, Col, Container, Row, Table, Input, Card, CardBody, Pagination, PaginationItem, PaginationLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { isEmpty } from "lodash"
import Flatpickr from "react-flatpickr"
import moment from 'moment';
import { Link } from "react-router-dom"
import { get, remove } from "../../components/helpers/api_helper"
import 'flatpickr/dist/flatpickr.min.css';
import AdminNavBar from "../../components/navbar/AdminNavBar"
import Footer from "../../components/footer/AdminFooter"

const Dashboard = () => {
  const dateRangeRef = useRef()
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [period, setPeriod] = useState({})
  const [defaultDate, setDefaultDate] = useState([])
  const [toggle, setToggle] = useState(false)
  const [message, setMessage] = useState(null)
  const [modal, setModal] = useState(false);
  const [ids, setIds] = useState([])

  function tog_modal() {
    setModal(!modal)
  };

  const fetchData = async () => {
    try {
      const data = await get('/form');
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const searchBar = (event) => {
    const value = event.target.value.trim()
    if (value === "" || value.length > 1) {
      //api call
    }
  }

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

  const onStatusChange = (evt) => { }

  const onDelete = (id) => {
    if (ids.length > 1) {
      remove("/form/items", ids)
    } else if (id) {
      remove("/form/items", [id])
    } else {
      console.log("Error")
    }
  }


  return (
    <React.Fragment>
      <AdminNavBar />
      <div className="page-content wrapper bg-light d-flex flex-column" style={{ marginTop: "60px", minHeight: "83vh" }}>
        <MetaTags>
          <title>Admin Dashboard | Nafal</title>
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
                              onInput={searchBar}
                              placeholder={"Search here..."}
                            />
                            <i className="uil uil-search search-icon" style={{ marginTop: "2px" }}></i>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-end">
                          <div className="ms-2">
                            <Button color="danger" className="btn btn-danger btn-sm me-2 mb-1" id="sa-success" onClick={() => { }}>
                              Delete
                            </Button>
                            <Button color="success" className="btn btn-success btn-sm me-2 mb-1" id="sa-success" onClick={() => { }}>
                              Download
                            </Button>
                            <Button color="primary" className="btn btn-primary btn-sm me-2" id="sa-success" onClick={() => { }}>
                              Refresh
                            </Button>
                          </div>
                          <div className="ms-2 me-2">
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
                          <div className="ms-2">
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
                              className="btn-sm"
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
                          <Table>
                            <thead className="thead-light text-capitalize">
                              <tr>
                                <th>Select</th>
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
                              {!isEmpty(data) ? (
                                data?.results?.map((item, index) => (
                                  <tr key={index}>
                                    <td>
                                      <Input
                                        style={{ borderColor: "black" }}
                                        type="checkbox"
                                      // onChange={() => toggleRow(item.id, item)}
                                      // checked={selectedRows.includes(item.id)}
                                      />
                                    </td>
                                    <td><Link to="#" onClick={() => handleClick(item.Message)}>{item.name?.substring(0, 22)}</Link></td>
                                    <td>{item.email?.substring(0, 25)}</td>
                                    <td>{item?.mobile?.toString()?.slice(0, 12)}</td>
                                    <td>{item.subject}</td>
                                    <td>
                                      <select
                                        value={""}
                                        onChange={onStatusChange}
                                        style={{
                                          border: 'none',
                                          outline: 'none',
                                          backgroundColor: 'transparent',
                                          padding: '0',
                                        }}
                                        className="text-start"
                                      >
                                        <option value="">Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="contacted">Contacted</option>
                                        <option value="resolved">Resolved</option>
                                      </select>
                                    </td>
                                    <td>
                                      <Link
                                        title={moment(item?.date).format('lll')}
                                        to="#"
                                        className="text-reset"
                                      >
                                        {item?.date ? moment(item?.date).format('MMM D, YYYY') : "Date not Available"}
                                      </Link>
                                    </td>
                                    <td>{item.comments.substring(0, 10)}</td>
                                    <td>
                                      <UncontrolledDropdown className="ms-auto">
                                        <DropdownToggle
                                          className="text-muted font-size-16"
                                          color="white"
                                        >
                                          <i className="mdi mdi-dots-horizontal"></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                          <Link className="dropdown-item" to="#" onClick={() => handleClick(item.Message)}>
                                            View
                                          </Link>
                                          <Link className="dropdown-item" to="#" onClick={(e) => { onDelete(item._id) }}>
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
                                    <p className="text-center mt-3">{data?.message}</p>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                      <div className="pagination-container">
                        <Container fluid>
                          <Row>
                            <Col xs="12">
                            <Pagination className="pagination justify-content-end mb-0">
                                <PaginationItem>
                                  <PaginationLink href="#" previous
                                  >
                                    Prev
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem active>
                                  <PaginationLink href="#">
                                    1
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink href="#">
                                    2
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink href="#">
                                    3
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink href="#" next>
                                    Next
                                  </PaginationLink>
                                </PaginationItem>
                              </Pagination>
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
      <Footer />
    </React.Fragment>
  )
}

export default Dashboard