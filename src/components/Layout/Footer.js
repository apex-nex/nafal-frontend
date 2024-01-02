import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import { useAuth } from '../../store/auth';
import { footerData } from '../../data';
import { footerDataArabic } from '../../data/indexArabic';

const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const { isArabic } = useAuth()
  const data = !isArabic ? footerData : footerDataArabic

  return (
    <React.Fragment>
      <Suspense fallback={Loader()}>
        <footer className="footer footer-bar">
          <div className="footer-py-30">
            <Container className="text-between justify-content-center">
              <Row className="align-items-center">
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="text-sm-start">
                    <p className="mb-1">
                      © {new Date().getFullYear()} NAFAL HVAC.{' '}
                      <Link to="/" rel="noreferrer" className="text-reset">
                        {data?.description}
                      </Link>
                      .
                    </p>
                  </div>
                </Col>

                <Col lg={3} md={2} sm={12} xs={12}>
                  <ul className="list-unstyled footer-list terms-service mb-2">
                    <li className="list-inline-item mb-0">
                      <Link to="/privacy" className="text-foot me-2">
                        {data?.PrivacyPage}
                      </Link>
                    </li>
                    <li className="list-inline-item mb-0">
                      <Link to="/terms" className="text-foot me-2">
                        {data?.TermsPage}
                      </Link>
                    </li>
                  </ul>
                </Col>

                <Col lg={3} md={4} sm={12} xs={12}>
                  <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-2">
                    <li className="list-inline-item mb-0 me-1">
                      <Link
                        to={'https://www.facebook.com/NAFAL.HVAC'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded"
                      >
                        <FeatherIcon icon="facebook" className="fea icon-sm fea-social" />
                      </Link>
                    </li>
                    <li className="list-inline-item mb-0 me-1">
                      <Link
                        to={'https://www.instagram.com/nafal.hvac/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded"
                      >
                        <FeatherIcon icon="instagram" className="fea icon-sm fea-social" />
                      </Link>
                    </li>
                    <li className="list-inline-item mb-0 me-1">
                      <Link
                        to={'https://twitter.com/NAFALHVAC'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded"
                      >
                        <FeatherIcon icon="twitter" className="fea icon-sm fea-social" />
                      </Link>
                    </li>
                    <li className="list-inline-item mb-0 me-1">
                      <Link
                        to={'https://www.linkedin.com/in/nafal-hvac-6937472a1'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded"
                      >
                        <FeatherIcon icon="linkedin" className="fea icon-sm fea-social" />
                      </Link>
                    </li>
                    <li className="list-inline-item mb-0 me-1">
                      <Link
                        to={'https://www.snapchat.com/add/nafal.hvac'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded"
                      >
                        <i className="bx bxl-snapchat"/>
                      </Link>
                    </li>
                    <li className="list-inline-item mb-0">
                      <Link
                        to={'https://www.youtube.com/channel/UCt4ij1e-w2XfbUtfTptwfKQ'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded"
                      >
                        <FeatherIcon icon="youtube" className="fea icon-sm fea-social" />
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      </Suspense>
    </React.Fragment>
  );
};

export default Footer;
