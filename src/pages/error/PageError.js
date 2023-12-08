import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import img404 from "../../assets/images/nafal/error/404.svg";

const PageError = () => {
  return (
    <>
      <div className="back-to-home rounded d-none d-sm-block">
        <Link to="/" className="btn btn-icon btn-primary">
          <i>
            <FeatherIcon icon="arrow-left" className="icons" />
          </i>
        </Link>
      </div>
      <section className="bg-home d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={12} className="text-center">
              <img src={img404} className="img-fluid" alt="" />
              <div className="text-uppercase mt-4 display-3">Oh ! no</div>
              <div className="text-capitalize text-dark mb-4 error-page">
                Page Not Found
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12" className="text-center">
              <Link
                to="#"
                onClick={() => props.history.goBack()}
                className="btn btn-outline-primary mt-4"
              >
                Go Back
              </Link>{" "}
              <Link to="/" className="btn btn-primary mt-4 ms-2">
                Go To Home
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default withRouter(PageError);
