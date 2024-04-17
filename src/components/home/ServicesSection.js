import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import FadeIn from 'react-fade-in';
import { servicesData } from '../../data';
import { servicesDataArabic } from '../../data/indexArabic';
import { useAuth } from '../../store/auth';

const ServiceSection = ({ seeMore = true }) => {
  const { isArabic } = useAuth()
  const data = isArabic ? servicesData : servicesDataArabic
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
      {data ? (
        <>
          <Container className="mt-100 mt-60">
            <Row>
              <Col lg={4} md={6}>
                <div className="section-title sticky-bar position-sticky">
                  <span className="badge rounded-pill bg-soft-primary">
                    {data?.heading}
                  </span>
                  <h4 className="title mt-3 mb-4">
                    {data?.title}
                  </h4>
                  <p className="text-muted para-desc mb-0">
                    {data?.description
                      ? data?.description?.map(
                        (ele, index) => (
                          <span
                            className={ele.highlight ? 'text-primary fw-bold' : ''}
                            key={index}
                          >
                            {ele.content}
                          </span>
                        ),
                      )
                      : null}
                  </p>

                  {
                    seeMore ?
                      <div className="mt-4 d-none d-md-block">
                        <Link to="/services" className="btn btn-soft-primary">
                          {data?.readMore}{' '}
                          <i>
                            <FeatherIcon
                              icon="arrow-right"
                              className="fea icon-sm"
                            />
                          </i>
                        </Link>
                      </div>
                      :
                      null
                  }
                </div>
              </Col>
              <Col lg={8} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Row>
                  <div className="col-12 filters-group-wrap">
                    <div className="filters-group">
                      <ul className="container-filter list-inline mb-0 filter-options" id="filter">
                        {data?.categories.map((category) => (
                          <li
                            key={data?.category}
                            onClick={() => setCategory(category)}
                            className={`list-inline-item categories-name border text-dark rounded ${displayCategory === category ? 'active' : ''
                              }`}
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Row>
                <Row className="projects-wrapper">
                  {data?.works
                    ? data?.works
                      .filter(
                        ({ category }) =>
                          displayCategory === category ||
                          displayCategory === 'All',
                      )
                      .map(({ title, image, subtitle, link }, key) => (
                        <Col
                          key={key}
                          lg={6}
                          xs={12}
                          className="mt-4 pt-2 offices"
                        >
                          <FadeIn delay={100}>
                            <Card className="border-0 work-container work-classic shadow overflow-hidden">
                              <CardBody className="p-0">
                                <Link to={link}>
                                  <img
                                    src={image}
                                    className="img-fluid work-image"
                                    alt={`Service ${key}`}
                                  />
                                </Link>
                                <div className="content p-4">
                                  <h5 className="mb-0">
                                    <Link
                                      to="#"
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
        </>
      ) : null}
    </React.Fragment>
  );
};

export default ServiceSection;
