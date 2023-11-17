// React Basic and Bootstrap
import React, { Component, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import img2 from "../../../../assets/images/2.jpg";
import img from "../../../../assets/images/nafal/home/video/img.svg";

// Modal Video
import ModalVideo from "react-modal-video";
// import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "../../../../../node_modules/react-modal-video/scss/modal-video.scss"

function Vision () {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div
          className="bg-cta shadow rounded card overflow-hidden"
          style={{ background: `url(${img}) center center` }}
          id="cta"
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title">
                  <h4 className="title title-dark text-white mb-4">
                    Your Trusted HVAC Experts
                  </h4>
                  <p className="text-white-50 para-dark para-desc mx-auto">
                    Experience the difference with Your HVAC Company. We provide
                    innovative solutions for all your heating, cooling, and
                    ventilation needs.
                  </p>
                  <Link
                    to="#"
                    onClick={openModal}
                    className="play-btn border border-light mt-4 video-play-icon"
                  >
                    <i>
                      <FeatherIcon
                        icon="play"
                        className="fea icon-ex-md text-white title-dark"
                      />
                    </i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="4z_odywmsyM"
        onClose={() => setIsOpen(false)}
      />
    </React.Fragment>
  );
}

export default Vision;
