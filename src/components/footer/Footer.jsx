import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FaSnapchat } from 'react-icons/fa';

//Import Icons
import FeatherIcon from 'feather-icons-react';

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
  return (
    <React.Fragment>
      <Suspense fallback={Loader()}>
        <footer className="footer footer-bar">
          <div className="footer-py-30">
            <Container className="text-center">
              <Row className="align-items-center">
                <Col sm={6}>
                  <div className="text-sm-start">
                    <p className="mb-0">
                      © {new Date().getFullYear()} NAFAL HVAC.{' '}
                      <Link
                        to="/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-reset"
                      >
                        All rights reserved.
                      </Link>
                      .
                    </p>
                  </div>
                </Col>

                <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                    <li className="list-inline-item mb-0">
                      <Link to={{ pathname: 'https://www.facebook.com/NAFAL.HVAC' }} target="_blank" rel="noopener noreferrer" className="rounded">
                        <FeatherIcon
                          icon="facebook"
                          className="fea icon-sm fea-social"
                        />
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item mb-0">
                      <Link to={{ pathname: 'https://www.instagram.com/nafal.hvac/' }} target="_blank" rel="noopener noreferrer" className="rounded">
                        <FeatherIcon
                          icon="instagram"
                          className="fea icon-sm fea-social"
                        />
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item mb-0">
                      <Link to={{ pathname: 'https://twitter.com/NAFALHVAC' }} target="_blank" rel="noopener noreferrer" className="rounded">
                        <FeatherIcon
                          icon="twitter"
                          className="fea icon-sm fea-social"
                        />
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item mb-0">
                      <Link to={{ pathname: 'https://www.linkedin.com/in/nafal-hvac-6937472a1' }} target="_blank" rel="noopener noreferrer" className="rounded">
                        <FeatherIcon
                          icon="linkedin"
                          className="fea icon-sm fea-social"
                        />
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item mb-0">
                      <Link to={{ pathname: 'https://www.snapchat.com/add/nafal.hvac' }} target="_blank" rel="noopener noreferrer" className="rounded snapIcon">
                        <FaSnapchat className="fea icon-sm fea-social" />
                      </Link>
                    </li>{' '}
                    <li className="list-inline-item mb-0">
                      <Link to={{ pathname: 'https://www.youtube.com/channel/UCt4ij1e-w2XfbUtfTptwfKQ' }} target="_blank" rel="noopener noreferrer" className="rounded">
                        <FeatherIcon
                          icon="youtube"
                          className="fea icon-sm fea-social"
                        />
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
