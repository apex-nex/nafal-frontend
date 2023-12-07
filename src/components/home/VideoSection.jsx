// React Basic and Bootstrap
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import img from '../../assets/images/nafal/home/video/img.svg';

// Modal Video
import ModalVideo from 'react-modal-video';

import '../../../node_modules/react-modal-video/scss/modal-video.scss';

function VideoSection(props) {
  const { videoSectionContent } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      {videoSectionContent ? (
        <React.Fragment>
          <Container fluid>
            <div
              className="bg-cta shadow rounded card overflow-hidden"
              style={{
                background: `url(${img}) center center`,
              }}
              id="cta"
            >
              <div className="bg-overlay"></div>
              <Container>
                <Row className="justify-content-center">
                  <Col xs="12" className="text-center">
                    <div className="section-title">
                      <h4 className="title title-dark text-white mb-4">
                        {videoSectionContent?.title}
                      </h4>
                      <p className="text-white-50 para-dark para-desc mx-auto">
                        {videoSectionContent?.description}
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
            videoId={videoSectionContent?.videoId}
            onClose={() => setIsOpen(false)}
          />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

export default VideoSection;
