import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import { useAuth } from '../../store/auth';
import { appTextContent } from "../../data";
import { appTextContentArabic } from "../../data/indexArabic";

const AppComingSoon = () => {
  const { isArabic } = useAuth()
  const data = isArabic ? appTextContent : appTextContentArabic

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
        <div className="bg-wrapper bg-gradient-primary"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12" className="text-center">
              <Link to={data?.logo.link} className="logo h5">
                <img src={data?.logo.imageSrc} height="24" alt={data?.logo.alt} />
              </Link>
              <div className="text-uppercase title-dark text-dark mt-2 mb-4 coming-soon">
                {data?.title}
              </div>
              <p className="text-muted para-desc mb-0 mx-auto">
                {data?.description}
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="text-center">
              <Link to={data?.goBackHomeBtn.link} className={data?.goBackHomeBtn.btnClass}>
                <i className={data?.goBackHomeBtn.iconClass}></i> {data?.goBackHomeBtn.text}
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AppComingSoon;
