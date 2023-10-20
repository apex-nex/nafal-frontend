import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import about from '../../../../assets/images/course/about.jpg';

//import images
import about from "../../../../assets/images/coworking/about.jpg";

function AboutSection() {
  return (
    <section className="section">
      <Container>
        <Row className="align-items-center">
          <Col lg="5" md="6" xs="12">
            <img src={about} className="img-fluid rounded" alt="" />
          </Col>

          <Col lg="7" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ms-lg-4">
              <h4 className="title mb-4">About Us</h4>
              <p className="text-muted">
                Experience the best in HVAC services with{" "}
                <span className="text-primary fw-bold">Your HVAC Company</span>.
                We provide top-notch heating, cooling, and ventilation solutions
                to ensure your home's comfort and efficiency. Our team of experts
                is committed to delivering outstanding service and reliability.
              </p>
              <Link to="#" className="btn btn-primary mt-3">
                Read more
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
