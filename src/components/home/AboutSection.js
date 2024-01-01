import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { aboutSectionData } from '../../data';

function AboutSection(props) {

  return (
    <React.Fragment>
      {aboutSectionData ? (
        <React.Fragment>
          <section className="section">
            <Container>
              <Row className="align-items-center">
                <Col lg="5" md="6" xs="12">
                  <img
                    src={aboutSectionData?.image}
                    className="img-fluid rounded"
                    alt="Server error!"
                  />
                </Col>

                <Col
                  lg="7"
                  md="6"
                  xs="12"
                  className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                >
                  <div className="section-title ms-lg-4">
                    <span className="badge rounded-pill bg-soft-primary">
                      {aboutSectionData?.badgeText}
                    </span>
                    <h4 className="title mt-3 mb-4">
                      {aboutSectionData?.titles
                        ? aboutSectionData?.titles?.map((ele, index) => (
                          <span
                            key={index}
                            className={ele.highlight ? 'text-primary' : ''}
                          >
                            {ele.breakPoint ? <br /> : null}
                            {ele.title}
                          </span>
                        ))
                        : null}
                    </h4>
                    <p className="text-muted">
                      {aboutSectionData?.description
                        ? aboutSectionData?.description?.map(
                          (ele, index) => (
                            <span
                              className={
                                ele.highlight ? 'text-primary fw-bold' : ''
                              }
                              key={index}
                            >
                              {ele.content}
                            </span>
                          ),
                        )
                        : null}
                    </p>
                    <Link to="/about-us" className="btn btn-primary mt-3">
                      Read more
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

export default AboutSection;
