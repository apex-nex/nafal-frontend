import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import FadeIn from 'react-fade-in';

const ServiceSection = (props) => {
  const { servicesSectionContent } = props;
  const [displayCategory, setDisplayCategory] = useState('All');

  const setCategory = (category) => {
    setDisplayCategory(category);
  };

  useEffect(() => {
    const scrollNavigation = () => {
      const doc = document.documentElement;
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      const topnav = document.getElementById('topnav');
      if (top > 80 && topnav) {
        topnav.classList.add('nav-sticky');
      } else if (topnav) {
        topnav.classList.remove('nav-sticky');
      }
    };

    window.addEventListener('scroll', scrollNavigation, true);
    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  return (
    <React.Fragment>
      {servicesSectionContent ? (
        <React.Fragment>
          <Container className="mt-100 mt-60">
            <Row>
              <Col lg={4} md={6}>
                <div className="section-title sticky-bar position-sticky">
                  <span className="badge rounded-pill bg-soft-primary">
                    {servicesSectionContent?.heading}
                  </span>
                  <h4 className="title mt-3 mb-4">
                    {servicesSectionContent?.title}
                  </h4>
                  <p className="text-muted para-desc mb-0">
                    {servicesSectionContent?.description
                      ? servicesSectionContent?.description?.map(
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

                  <div className="mt-4 d-none d-md-block">
                    <Link to="/services" className="btn btn-soft-primary">
                      See More{' '}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={8} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Row>
                  <div className="col-12 filters-group-wrap">
                    <div className="filters-group">
                      <ul
                        className="container-filter list-inline mb-0 filter-options"
                        id="filter"
                      >
                        <li
                          onClick={() => setCategory('All')}
                          className={
                            displayCategory === 'All'
                              ? 'list-inline-item categories-name border text-dark rounded active'
                              : 'list-inline-item categories-name border text-dark rounded'
                          }
                        >
                          All
                        </li>{' '}
                        <li
                          onClick={() => setCategory('Residential')}
                          className={
                            displayCategory === 'Residential'
                              ? 'list-inline-item categories-name border text-dark rounded active'
                              : 'list-inline-item categories-name border text-dark rounded'
                          }
                        >
                          Residential
                        </li>{' '}
                        <li
                          onClick={() => setCategory('Commercial')}
                          className={
                            displayCategory === 'Commercial'
                              ? 'list-inline-item categories-name border text-dark rounded active'
                              : 'list-inline-item categories-name border text-dark rounded'
                          }
                        >
                          Commercial
                        </li>{' '}
                        <li
                          onClick={() => setCategory('Infrastructure')}
                          className={
                            displayCategory === 'Infrastructure'
                              ? 'list-inline-item categories-name border text-dark rounded active'
                              : 'list-inline-item categories-name border text-dark rounded'
                          }
                        >
                          Infrastructure
                        </li>
                      </ul>
                    </div>
                  </div>
                </Row>
                <Row className="projects-wrapper">
                  {servicesSectionContent?.works
                    ? servicesSectionContent?.works
                      .filter(
                        ({ category }) =>
                          displayCategory === category ||
                          displayCategory === 'All',
                      )
                      .map(({ title, image, subtitle }, key) => (
                        <Col
                          key={key}
                          lg={6}
                          xs={12}
                          className="mt-4 pt-2 offices"
                        >
                          <FadeIn delay={100}>
                            <Card className="border-0 work-container work-classic shadow overflow-hidden">
                              <CardBody className="p-0">
                                <Link to="page-work-detail">
                                  <img
                                    src={require(
                                      `../../assets/images/nafal/home/services/${image}`,
                                    )}
                                    className="img-fluid work-image"
                                    alt="Nafal"
                                    style={{height:"260px"}}
                                  />
                                </Link>
                                <div className="content p-4">
                                  <h5 className="mb-0">
                                    <Link
                                      to="page-work-detail"
                                      className="text-dark title"
                                    >
                                      {title}
                                    </Link>
                                  </h5>
                                  <h6 className="text-muted tag mb-0">
                                    {subtitle}
                                  </h6>
                                </div>
                              </CardBody>
                            </Card>
                          </FadeIn>
                        </Col>
                      ))
                    : null}
                </Row>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default ServiceSection;
