import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import { videoSectionData } from '../../data';
import { useAuth } from '../../store/auth';
import { videoSectionDataArabic } from '../../data/indexArabic';

function VideoSection(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { isArabic } = useAuth()
  const data = !isArabic ? videoSectionData : videoSectionDataArabic

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      {data ? (
        <>
          <Container fluid>
            <div
              className="bg-cta shadow rounded card overflow-hidden"
              style={{
                background: `url(${data?.img}) center center`,
              }}
              id="cta"
            >
              <div className="bg-overlay"></div>
              <Container>
                <Row className="justify-content-center">
                  <Col xs="12" className="text-center">
                    <div className="section-title">
                      <h4 className="title title-dark text-white mb-4">
                        {data?.title}
                      </h4>
                      <p className="text-white-50 para-dark para-desc mx-auto">
                        {data?.description}
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
            videoId={data?.videoId}
            onClose={() => setIsOpen(false)}
          />
        </>
      ) : null}
    </React.Fragment>
  );
}

export default VideoSection;
