import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import { useAuth } from '../../store/auth';
import { errorContent } from "../../data";
import { errorContentArabic } from "../../data/indexArabic";

const PageError = () => {
  const { isArabic } = useAuth()
  const data = !isArabic ? errorContent : errorContentArabic

  return (
    <React.Fragment>
      <div className="back-to-home rounded d-none d-sm-block">
        <Link to={data?.backToHome.link} className={data?.backToHome.btnClass}>
          <i>
            <FeatherIcon icon={data?.backToHome.icon} className="icons" />
          </i>
        </Link>
      </div>
      <section className="bg-home d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={12} className="text-center">
              <img src={data?.image.src} className="img-fluid" alt={data?.image.alt} />
              <div className="text-uppercase mt-4 display-3">{data?.title}</div>
              <div className="text-capitalize text-dark mb-4 error-page">
                {data?.description}
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12" className="text-center">
              <Link to={data?.goHomeBtn.link} className={data?.goHomeBtn.btnClass}>
                {data?.goHomeBtn.text}
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PageError;
