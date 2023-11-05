import React, { useEffect, useRef, useState } from "react"
import MetaTags from "react-meta-tags"
import { Button, Col, Container, Row, Table, Input, Card, CardBody, Pagination, PaginationItem, PaginationLink, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { isEmpty } from "lodash"
import Flatpickr from "react-flatpickr"
import moment from 'moment';
import { Link } from "react-router-dom"

const Dashboard = () => {
  const dateRangeRef = useRef()
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [period, setPeriod] = useState({})
  const [defaultDate, setDefaultDate] = useState([])
  const [toggle, setToggle] = useState(false)
  const [message, setMessage] = useState(null)
  const [modal, setModal] = useState(false);
  function tog_modal() {
    setModal(!modal)
  };

  const nafalData = [
    {
      "Name": "John Doe",
      "Email": "johndoe@example.com",
      "Mobile": "(123) 456-7890",
      "Subject": "Inquiry 1",
      "Message": "This is a sample message 1."
    },
    {
      "Name": "Jane Smith",
      "Email": "janesmith@example.com",
      "Mobile": "(987) 654-3210",
      "Subject": "Question 2",
      "Message": "This is a sample message 2."
    },
    {
      "Name": "Alice Johnson",
      "Email": "alice@example.com",
      "Mobile": "(555) 123-4567",
      "Subject": "Feedback",
      "Message": "This is a sample message 3."
    },
    {
      "Name": "Bob Brown",
      "Email": "bob@example.com",
      "Mobile": "(999) 888-7777",
      "Subject": "Support Request",
      "Message": "This is a sample message 4."
    },
    {
      "Name": "Eva Wilson",
      "Email": "eva@example.com",
      "Mobile": "(111) 222-3333",
      "Subject": "Product Inquiry",
      "Message": "This is a sample message 5."
    },
    {
      "Name": "Michael Lee",
      "Email": "michael@example.com",
      "Mobile": "(444) 555-6666",
      "Subject": "Question about Services",
      "Message": "This is a sample message 6."
    },
    {
      "Name": "Emily Davis",
      "Email": "emily@example.com",
      "Mobile": "(777) 888-9999",
      "Subject": "General Inquiry",
      "Message": "This is a sample message 7."
    },
    {
      "Name": "Daniel Hernandez",
      "Email": "daniel@example.com",
      "Mobile": "(222) 333-4444",
      "Subject": "Technical Support",
      "Message": "This is a sample message 8."
    },
    {
      "Name": "Olivia White",
      "Email": "olivia@example.com",
      "Mobile": "(666) 777-8888",
      "Subject": "Billing Issue",
      "Message": "This is a sample message 9."
    },
    {
      "Name": "Liam Anderson",
      "Email": "liam@example.com",
      "Mobile": "(999) 111-2222",
      "Subject": "Account Problem",
      "Message": "This is a sample message 10."
    },
    {
      "Name": "Sophia Hall",
      "Email": "sophia@example.com",
      "Mobile": "(333) 444-5555",
      "Subject": "Order Status",
      "Message": "This is a sample message 11."
    },
    {
      "Name": "William Adams",
      "Email": "william@example.com",
      "Mobile": "(888) 999-0000",
      "Subject": "Feedback",
      "Message": "This is a sample message 12."
    },
    {
      "Name": "Ava Moore",
      "Email": "ava@example.com",
      "Mobile": "(444) 555-6666",
      "Subject": "Support Request",
      "Message": "This is a sample message 13."
    },
    {
      "Name": "James Parker",
      "Email": "james@example.com",
      "Mobile": "(222) 333-4444",
      "Subject": "Product Inquiry",
      "Message": "This is a sample message 14."
    },
    {
      "Name": "Mia Wilson",
      "Email": "mia@example.com",
      "Mobile": "(777) 888-9999",
      "Subject": "Question about Services",
      "Message": "This is a sample message 15."
    }
  ]

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


  return (
    <div className="page-content" style={{ marginTop: "60px" }}>
      <MetaTags>
        <title>Admin Dashboard | Nafal</title>
      </MetaTags>
      <Container fluid>
        <Row>
          <Col xs="12">
            {false ? (
              <p className="text-center text-danger">{"error"}</p>
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
                            color={period.value === 60 ? 'primary' : 'light'}
                            onClick={() => onPeriodChange(60)}
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
                              <th>Message</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {!isEmpty(nafalData) ? (

                              nafalData.map((item, index) => (
                                <tr key={index}>
                                  <td>
                                    <Input
                                      style={{ borderColor: "black" }}
                                      type="checkbox"
                                    // onChange={() => toggleRow(item.id, item)}
                                    // checked={selectedRows.includes(item.id)}
                                    />
                                  </td>
                                  <td><Link to="#" onClick={() => handleClick(item.Message)}>{item.Name}</Link></td>
                                  <td>{item.Email}</td>
                                  <td>{item.Mobile}</td>
                                  <td>{item.Subject}</td>
                                  <td>pending</td>
                                  <td>
                                    {item.Message.substring(0, 25)}
                                  </td>
                                  <td>
                                    <UncontrolledDropdown className="ms-auto">
                                      <DropdownToggle
                                        className="text-muted font-size-16"
                                        color="white"
                                      >
                                        <i className="mdi mdi-dots-horizontal"></i>
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-end">
                                        <Link className="dropdown-item" to="#" onClick={()=>handleClick(item.Message)}>
                                          View
                                        </Link>
                                        <Link className="dropdown-item" to="#" onClick={() => { }}>
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
                                <td colSpan="6" className="react-bs-table-no-data" style={{ padding: "3px" }}>
                                  <p className="text-center">Records not found</p>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </Table>
                      </div>
                    </Col>
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
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard