import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import MetaTags from 'react-meta-tags';
import KeyFeatureBox from '../../components/about/KeyFeatureBoxNafal';
import SectionTitle from '../../components/about/SectionTitleNafal';
import { aboutData } from '../../data';
import { useAuth } from '../../store/auth';
import { aboutDataArabic } from '../../data/indexArabic';

const About = () => {
  const { isArabic } = useAuth()
  const data = !isArabic ? aboutData : aboutDataArabic
  const [isSeeMore, setIsseeMore] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>About | Nafal</title>
        </MetaTags>
        {data ? <>
          <section className="bg-half-170 bg-light d-table w-100">
            <Container>
              <Row className="mt-5 justify-content-center">
                <Col lg={12} className="text-center">
                  <div className="pages-heading">
                    <h4 className="title mb-0"> {data?.aboutUsCmsData?.page_heading}</h4>
                  </div>
                </Col>
              </Row>

              <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                    {data?.aboutUsCmsData?.breadcrumb?.map((item, index) => (
                      <li className={item?.className} key={index}>
                        {item?.link ? <Link to={item.link}>{item.name}</Link> : item?.name}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </Container>
          </section>
          <div className="position-relative">
            <div className="shape overflow-hidden text-white">
              <svg
                viewBox="0 0 2880 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <section className="section">
            <Container>
              <Row className="align-items-center">
                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="position-relative">
                    <img src={data?.aboutUsCmsData?.img} className="rounded img-fluid mx-auto d-block" alt="Nafal" />
                  </div>
                </Col>

                <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-4">
                    <h4 className="title mb-4">{data?.aboutUsCmsData?.title}</h4>
                    <p className="text-muted">
                      {
                        data?.aboutUsCmsData?.our_story?.description ? data?.aboutUsCmsData?.our_story?.description.map((ele, index) =>
                          (<span key={index} className={ele.highlight ? "text-primary fw-bold" : ""}>{ele.content}</span>)
                        )
                          : null
                      }
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container className="mt-100 mt-60" style={{ marginTop: "50px" }}>
              {/* Render Section Title */}
              {data?.aboutUsCmsData?.key_features ?
                <SectionTitle
                  isLeft={false}
                  keyFeatures={data?.aboutUsCmsData?.key_features}
                />
                :
                null
              }

              <Row>
                {/* key features */}
                {data?.aboutUsCmsData?.key_features?.key_features_list ?
                  <KeyFeatureBox
                    isSeeMore={isSeeMore}
                    keyfeatures={data?.aboutUsCmsData?.key_features?.key_features_list}
                  />
                  : null}
                <Col xs={12} className="text-center mt-4 pt-2">
                  <Link to="#" className="btn btn-primary"
                    onClick={() => { setIsseeMore(!isSeeMore) }}
                  >
                    {isSeeMore ? data?.aboutUsCmsData?.seeMore : data?.aboutUsCmsData?.hideMore} <i className={`mdi mdi-arrow-${isSeeMore ? 'up' : 'down'}`}></i>
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </> : null}
      </div>
    </React.Fragment>
  );
};

export default About;
