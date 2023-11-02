import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'reactstrap';

export default function ContactSection() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="border-0 text-center features feature-primary feature-clean">
              <div className="icons text-center mx-auto">
                <i className="uil uil-phone d-block rounded h3 mb-0"></i>
              </div>
              <div className="content mt-4">
                <h5 className="fw-bold">Phone</h5>
                <p className="text-muted">
                  Start working with Nafal that can provide everything
                </p>
                <Link to="#" className="text-primary">
                  +966 51 014 9313
                </Link>
              </div>
            </Card>
          </Col>

          <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
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
                  Talha bin Ubaidullah, 7946, Al-Fayhaa  <br />
                  Riyadh 14253, Saudi Arabia
                </p>
                <Link to="#" className="video-play-icon h6 text-primary">
                  View on Google map
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
