import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function AboutSection(props) {
  const { aboutSectionContent } = props;

  return ( 
    <React.Fragment>
      {aboutSectionContent ? (
        <React.Fragment>
          <section className="section">
            <Container>
              <Row className="align-items-center">
                <Col lg="5" md="6" xs="12">
                  <img
                    src={require( `../../assets/images/home/about/${aboutSectionContent?.image}`)}
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
                      {aboutSectionContent?.heading}
                    </span>
                    <h4 className="title mt-3 mb-4">
                      {/* We Lead the Way <br /> in the{" "}
                  <span className="text-primary">HVAC Services</span> */}
                      {aboutSectionContent?.titles
                        ? aboutSectionContent?.titles?.map((ele, index) => (
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
                      {/* Experience the best in HVAC services with{' '}
                <span className="text-primary fw-bold">Your HVAC Company</span>.
                We provide top-notch heating, cooling, and ventilation solutions
                to ensure your home's comfort and efficiency. Our team of
                experts is committed to delivering outstanding service and
                reliability. */}
                      {aboutSectionContent?.description
                        ? aboutSectionContent?.description?.map(
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
