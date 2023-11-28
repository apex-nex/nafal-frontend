import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import KeyFeatureBox from '../../components/about/KeyFeatureBoxNafal';
import SectionTitle from '../../components/about/SectionTitleNafal';
import ModalVideo from 'react-modal-video';
import about from '../../../../assets/images/about.jpg';
import '../../../../../node_modules/react-modal-video/scss/modal-video.scss';
import about_us_cms_data from '../../../../data/about/cms_about.json'



const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutCmsData, setaboutCmsData] = useState({});
  const [isSeeMore,setIsseeMore]=useState(false)

  const openModal = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    document.title = 'About | Nafal';
  }, []);
  useEffect(() => {
    console.log("about_us_cms_data", about_us_cms_data.data)
    setaboutCmsData(about_us_cms_data.data)
  }, [])
  return (
    <React.Fragment>
      {aboutCmsData ? <>
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title mb-0"> {aboutCmsData?.aboutUsCmsData?.page_heading}</h4>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item"><Link to="/">Nafal</Link></li>{" "}
                  <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">About us</li>
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

        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={aboutCmsData?.aboutUsCmsData?.our_story?.video_id}
          onClose={() => setIsOpen(false)}
        />
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="position-relative">
                  <img
                    src={about} 
                    className="rounded img-fluid mx-auto d-block"
                    alt=""
                  />
                  <div className="play-icon">
                    <Link
                      onClick={openModal}
                      to="#"
                      className="play-btn lightbox border-0"
                    >
                      <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title ms-lg-4">
                  <h4 className="title mb-4">Our Story</h4>
                  <p className="text-muted">
                    {
                      aboutCmsData?.aboutUsCmsData?.our_story?.discription ? aboutCmsData?.aboutUsCmsData?.our_story?.discription.map((ele, index) =>
                        (<span key={index} className={ele.highlight ? "text-primary fw-bold" : ""}>{ele.content}</span>)
                      )
                        : null
                    }
                  </p>
                  {/* <Link to="#" className="btn btn-primary mt-3">
                    Buy Now <i className="uil uil-angle-right-b"></i>
                  </Link> */}
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* Render Section Title */}
            { aboutCmsData?.aboutUsCmsData?.key_features ? 
            <SectionTitle
              isLeft={false}
              keyFeatures={aboutCmsData?.aboutUsCmsData?.key_features}
            />
            :
            null
            }

            <Row>
              {/* key features */}
           {  aboutCmsData?.aboutUsCmsData?.key_features?.key_features_list?   
              <KeyFeatureBox
              isSeeMore={isSeeMore}
              keyfeatures={aboutCmsData?.aboutUsCmsData?.key_features?.key_features_list}
                />
          :null}
              <Col xs={12} className="text-center mt-4 pt-2">
                <Link to="#" className="btn btn-primary" 
                onClick={()=>{setIsseeMore(!isSeeMore)}}
                >
                  {isSeeMore ? "Hide More":"See More"} <i className={`mdi mdi-arrow-${isSeeMore?'up':'down'}`}></i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <section className="section bg-light">
          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title">
                  <h4 className="title mb-4">
                    See everything about your employee at one place.
                  </h4>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Nafal</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary mt-2 me-2">
                      Get Started Now
                    </Link>
                    &nbsp;
                    <Link to="#" className="btn btn-outline-primary mt-2">
                      Free Trial
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
      </> : null}
    </React.Fragment>
  );
};

export default About;
