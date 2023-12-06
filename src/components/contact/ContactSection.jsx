import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'reactstrap';

export default function ContactSection(props) {
  const { contactSectionContent } = props;

  const onClickFunctionalities = (ele) => {
    if (ele.title === 'Location') {
      window.open(
        'https://www.google.com/maps/place/%D9%86%D9%81%D8%A7%D9%84+%D8%AA%D9%88%D8%B1%D9%8A%D8%AF+%D9%88%D8%AA%D8%B1%D9%83%D9%8A%D8%A8+%D9%88%D8%B5%D9%8A%D8%A7%D9%86%D8%A9+%D8%A7%D9%84%D9%85%D9%83%D9%8A%D9%81%D8%A7%D8%AA%E2%80%AD/@24.685672,46.802642,16z/data=!4m6!3m5!1s0x448c5c09c7a1c7e9:0xc5511f81ae714f68!8m2!3d24.6856717!4d46.8026418!16s%2Fg%2F11l34gbryx?hl=en&entry=ttu',
        '_blank',
      );
    }
  };

  return (
    <React.Fragment>
      {contactSectionContent ? (
        <React.Fragment>
          <Container>
            <Row>
              {contactSectionContent?.content
                ? contactSectionContent?.content?.map((ele, key) => (
                    <Col
                      md={4}
                      key={key}
                      className={
                        ele.sameClassName ? 'mt-4 mt-sm-0 pt-2 pt-sm-0' : ''
                      }
                    >
                      <Card className="border-0 text-center features feature-primary feature-clean">
                        <div className="icons text-center mx-auto">
                          <i
                            className={`uil ${ele.icon} d-block rounded h3 mb-0`}
                          ></i>
                        </div>
                        <div className="content mt-4">
                          <h5 className="fw-bold">{ele.title}</h5>
                          <p className="text-muted">{ele.discription}</p>
                          <Link
                            to="#"
                            className={
                              ele.textBold
                                ? 'video-play-icon h6 text-primary'
                                : 'text-primary'
                            }
                            onClick={() => {
                              onClickFunctionalities(ele);
                            }}
                          >
                            {ele.data}
                          </Link>
                        </div>
                      </Card>
                    </Col>
                  ))
                : null}

              {/* <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 text-center features feature-primary feature-clean">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-4">
                    <h5 className="fw-bold">Email</h5>
                    <p className="text-muted">
                      Start working with Nafal that can provide everything
                    </p>
                    <Link to="#" className="text-primary">
                      info@nafal-hvac.sa
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 text-center features feature-primary feature-clean">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-4">
                    <h5 className="fw-bold">Location</h5>
                    <p className="text-muted">
                      Talha bin Ubaidullah, 7946, Al-Fayhaa <br />
                      Riyadh 14253, Saudi Arabia
                    </p>
                    <Link to="#" className="video-play-icon h6 text-primary">
                      View on Google map
                    </Link>
                  </div>
                </Card>
              </Col> */}
            </Row>
          </Container>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
