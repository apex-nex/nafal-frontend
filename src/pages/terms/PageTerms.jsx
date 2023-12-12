import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Collapse,
} from "reactstrap";

// Import Icons
import FeatherIcon from "feather-icons-react";

const PageTerms = () => {
  const [col1, setCol1] = useState(false);
  const [col2, setCol2] = useState(false);
  const [col3, setCol3] = useState(false);
  const [col4, setCol4] = useState(false);

  const toggleAccordion = (accordion) => {
    switch (accordion) {
      case 1:
        setCol1(!col1);
        break;
      case 2:
        setCol2(!col2);
        break;
      case 3:
        setCol3(!col3);
        break;
      case 4:
        setCol4(!col4);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.body.classList = "";
    const shoppingBtn = document.querySelector(".shoppingbtn");
    if (shoppingBtn) {
      shoppingBtn.classList.add("btn-primary");
    }
    window.addEventListener("scroll", scrollNavigation, true);

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById("topnav");

    if (navBar) {
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

      if (top > 80) {
        navBar.classList.add("nav-sticky");
      } else {
        navBar.classList.remove("nav-sticky");
        const shoppingBtn = document.querySelector(".shoppingbtn");
        if (shoppingBtn) {
          shoppingBtn.classList.add("btn-primary");
          shoppingBtn.classList.remove("btn-light");
        }

        const settingBtn = document.querySelector(".settingbtn");
        if (settingBtn) {
          settingBtn.classList.add("btn-soft-primary");
        }
      }
    }
  };

  return (
    <React.Fragment>
      {/* breadcrumb */}
      <section className="bg-half-170 bg-light d-table w-100">
        <Container>
          <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div className="pages-heading">
                <h4 className="title mb-0"> Terms of Services </h4>
              </div>
            </Col>
          </Row>

          <div className="position-breadcrumb">
            <nav aria-label="breadcrumb" className="d-inline-block">
              <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                <li className="breadcrumb-item">
                  <Link to="/">Nafal</Link>
                </li>{" "}
                <li className="breadcrumb-item">
                  <Link to="#">Page</Link>
                </li>{" "}
                <li className="breadcrumb-item active" aria-current="page">
                  Terms
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <Card className="shadow border-0 rounded">
                <CardBody>
                  <h5 className="card-title">Welcome to Nafal HVAC :</h5>
                  <p className="text-muted">
                    Discover the best in heating, ventilation, and air conditioning services at Nafal HVAC. We are dedicated to providing unmatched comfort solutions for your indoor spaces.
                  </p>

                  <h5 className="card-title">Our Service Commitment :</h5>
                  <p className="text-muted">
                    At Nafal HVAC, we <strong className="text-danger">pledge</strong> to provide HVAC services that are <strong className="text-danger">reliable</strong> and <strong className="text-danger">efficient</strong>, specifically <strong className="text-danger">tailored</strong> to meet your unique needs. Our unwavering commitment is to enhance the <strong className="text-danger">performance</strong> and <strong className="text-danger">lifespan</strong> of your HVAC systems, ensuring your indoor comfort year-round.
                  </p>


                  <h5 className="card-title">Service Restrictions :</h5>
                  <p className="text-muted">
                    To ensure the quality and safety of our HVAC services, you are specifically restricted from engaging in the following activities:
                  </p>
                  <ul className="list-unstyled feature-list text-muted">
                    <li>
                      <i>
                        <FeatherIcon icon="arrow-right" className="fea icon-sm me-2" />
                      </i>
                      Attempting to repair HVAC systems without proper training and certification.
                    </li>
                    <li>
                      <i>
                        <FeatherIcon icon="arrow-right" className="fea icon-sm me-2" />
                      </i>
                      Modifying or tampering with HVAC components, including internal wiring and refrigerant lines.
                    </li>
                    <li>
                      <i>
                        <FeatherIcon icon="arrow-right" className="fea icon-sm me-2" />
                      </i>
                      Installing non-approved aftermarket parts or components that may compromise system efficiency.
                    </li>
                    <li>
                      <i>
                        <FeatherIcon icon="arrow-right" className="fea icon-sm me-2" />
                      </i>
                      Disassembling or cleaning internal HVAC components without professional guidance.
                    </li>
                    <li>
                      <i>
                        <FeatherIcon icon="arrow-right" className="fea icon-sm me-2" />
                      </i>
                      Neglecting regular maintenance schedules, leading to potential system failures.
                    </li>
                    <li>
                      <i>
                        <FeatherIcon icon="arrow-right" className="fea icon-sm me-2" />
                      </i>
                      Using unauthorized refrigerants or attempting to recharge the system without proper certification.
                    </li>
                  </ul>


                  <h5 className="card-title">Users Question & Answer :</h5>
                  <div className="faq-content mt-4">
                    <div className="accordion" id="accordionExample">
                      <Card className="border-0 rounded mb-2">
                        <Link
                          to="#"
                          onClick={() => toggleAccordion(1)}
                          className={
                            col1
                              ? "faq position-relative text-primary"
                              : "faq position-relative text-dark"
                          }
                        >
                          <CardHeader className="border-0 bg-light p-3" id="headingOne">
                            <h6 className="title mb-0">
                              How often should I service my HVAC system?
                              <i
                                className={
                                  col1
                                    ? "mdi mdi-chevron-up float-end"
                                    : "mdi mdi-chevron-down float-end"
                                }
                              ></i>
                            </h6>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={col1}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              It is recommended to service your HVAC system annually to ensure optimal performance and longevity.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="border-0 rounded mb-2">
                        <Link
                          to="#"
                          onClick={() => toggleAccordion(2)}
                          className={
                            col2
                              ? "faq position-relative text-primary"
                              : "faq position-relative text-dark"
                          }
                        >
                          <CardHeader className="border-0 bg-light p-3" id="headingTwo">
                            <h6 className="title mb-0">
                              What are signs that my HVAC system needs repair?
                              <i
                                className={
                                  col2
                                    ? "mdi mdi-chevron-up float-end"
                                    : "mdi mdi-chevron-down float-end"
                                }
                              ></i>
                            </h6>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={col2}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              Signs include unusual noises, reduced airflow, and inconsistent temperature control.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="border-0 rounded mb-2">
                        <Link
                          to="#"
                          onClick={() => toggleAccordion(3)}
                          className={
                            col3
                              ? "faq position-relative text-primary"
                              : "faq position-relative text-dark"
                          }
                        >
                          <CardHeader className="border-0 bg-light p-3" id="headingThree">
                            <h6 className="title mb-0">
                              How can I improve the energy efficiency of my HVAC system?
                              <i
                                className={
                                  col3
                                    ? "mdi mdi-chevron-up float-end"
                                    : "mdi mdi-chevron-down float-end"
                                }
                              ></i>
                            </h6>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={col3}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              To enhance energy efficiency, regularly clean or replace air filters and consider upgrading to a programmable thermostat.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="border-0 rounded mb-2">
                        <Link
                          to="#"
                          onClick={() => toggleAccordion(4)}
                          className={
                            col4
                              ? "faq position-relative text-primary"
                              : "faq position-relative text-dark"
                          }
                        >
                          <CardHeader className="border-0 bg-light p-3" id="headingFour">
                            <h6 className="title mb-0">
                              What is the lifespan of an HVAC system?
                              <i
                                className={
                                  col4
                                    ? "mdi mdi-chevron-up float-end"
                                    : "mdi mdi-chevron-down float-end"
                                }
                              ></i>
                            </h6>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={col4}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              The average lifespan of an HVAC system is around 15 to 20 years, depending on maintenance and usage.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      {/* Add more Q&A cards as needed */}
                    </div>

                    <div className="mt-3">
                      <Link to="/contact" className="btn btn-primary mt-2 me-2">
                        Contact Us
                      </Link>{" "}
                      <Link to="/services" className="btn btn-outline-primary mt-2">
                        Services
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default PageTerms;
