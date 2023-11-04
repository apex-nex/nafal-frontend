import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import {Button, Col, Container, Row, Table, Input, Card, CardBody,  Pagination, PaginationItem, PaginationLink, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup} from "reactstrap"
import { isEmpty } from "lodash"
import Flatpickr from "react-flatpickr"

const Dashboard = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
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

  return (
    <div className="page-content" style={{marginTop:"60px"}}>
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
                          <i className="bx bx-search-alt search-icon" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex justify-content-end">
                        <Button color="primary" className="btn-sm" id="sa-success" onClick={()=>{}}>
                          Refresh
                        </Button>
                        <div className="ms-2">
                            <InputGroup>
                              <Flatpickr
                                className="form-control form-control-sm"
                                placeholder="Select daterange range"
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
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="table-responsive">
                        <Table>
                          <thead className="thead-light text-capitalize">
                            <tr>
                              <th>S.No</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Mobile</th>
                              <th>Subject</th>
                              <th>Message</th>
                            </tr>
                          </thead>
                          <tbody>
                          {!isEmpty(nafalData) ? (
                            
                                nafalData.map((item, index) => (
                                    <tr key={index}>        
                                      <td>{index + 1}</td>
                                      <td>{item.Name}</td>
                                      <td>{item.Email}</td>
                                      <td>{item.Mobile}</td>
                                      <td>{item.Subject}</td>
                                      <td>{item.Message}</td>
                                    </tr>
                                )
                          )
                          ) : (
                            <tr>
                              <td colSpan="6" className="react-bs-table-no-data" style={{padding:"3px"}}>
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