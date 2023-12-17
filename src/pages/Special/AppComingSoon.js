import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import logoNafal from '../../assets/images/logo/nafal-logo.png';

const AppComingSoon = () => {
  return (
    <React.Fragment>
      <div className="back-to-home rounded d-none d-sm-block">
        <Link to="/" className="btn btn-icon btn-primary">
          <i>
            <FeatherIcon icon="arrow-left" className="icons" />
          </i>
        </Link>
      </div>
      <section
        className="bg-home d-flex align-items-center"
      >
        <div className="bg-wrapper bg-gradient-primary"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12" className="text-center">
              <Link to="#" className="logo h5">
                <img src={logoNafal} height="24" alt="" />
              </Link>
              <div className="text-uppercase title-dark text-dark mt-2 mb-4 coming-soon">
                App Coming Soon...
              </div>
              <p className="text-muted para-desc mb-0 mx-auto">
                Start working with Nafal HVAC Company that can provide everything
                you need to ensure your home's comfort and efficiency. 
                Experience top-notch heating, cooling, and ventilation solutions.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="text-center">
              <Link to="/" className="btn btn-primary mt-4">
                <i className="mdi mdi-backup-restore"></i> Go Back Home
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AppComingSoon;
