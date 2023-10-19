import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import mockData from '../../mock/mockAboutData.json';
import about from "../../../../assets/images/course/about.jpg";

const AboutSection = () => {
  return (
    <React.Fragment>
      <section className="section pt-0">
        <Container>
          <Row className="align-items-center">
            <Col lg="5" md="6" xs="12">
              <img
                src={about}
                className="img-fluid shadow rounded"
                alt="Image not found!!"
              />
            </Col>
            <Col lg="7" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-4">
                <h4 className="title mb-4">
                  <span className="text-primary">{mockData.data.title}</span>
                </h4>
                <p className="text-muted">{mockData.data.discription}</p>
                {/* <ul className="list-unstyled feature-list mb-0 text-muted">
                  <li>
                    <i className="uil uil-arrow-circle-right text-primary h5 mb-0 align-middle me-2"></i>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li>
                    <i className="uil uil-arrow-circle-right text-primary h5 mb-0 align-middle me-2"></i>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li>
                    <i className="uil uil-arrow-circle-right text-primary h5 mb-0 align-middle me-2"></i>
                    Create your own skin to match your brand
                  </li>
                </ul> */}
                <Container>
                  <Row>
                    <Col xs="12" sm="12"  md="4" lg="4" xl="4">
                      <Link to="#" className="btn btn-outline-primary mt-3">
                        Company Profile
                      </Link>
                    </Col>
                    <Col xs="12" sm="12" md="4" lg="4" xl="4">
                      <Link to="#" className="btn btn-outline-primary mt-3">
                        Read More...
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AboutSection;
