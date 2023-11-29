import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
// import FeatherIcon from 'feather-icons-react';
import Slider from 'react-slick';
// import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

// import bg01 from '../../../../assets/images/blog/bg1.jpg';
import bg01 from '../../../../assets/images/nafal/home/carousel/bg1.jpg';

const Carousel = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  const { carouselSectionContent } = props;

  useEffect(() => {
    let componentMount = true;
    if (componentMount == true) {
      var e1 = document.getElementsByClassName('slick-slide');
      for (var i = 0; i < 3; i++) {
        if (i === 0) e1[i].style.backgroundImage = `url(${bg01})`;
        // if (i === 1) e1[i].style.backgroundImage = `url(${bg02})`;
        // if (i === 2) e1[i].style.backgroundImage = `url(${bg03})`;
      }

      // document.getElementById('btn1').addEventListener('click', openModal);
    }
    return () => {
      // document.getElementById('btn1').removeEventListener('click', openModal);
      componentMount = false;
    };
  }, []);

  var settings = {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    draggable: true,
    pauseOnHover: true,
  };

  const slides = carouselSectionContent?.carouselItems
    ? carouselSectionContent?.carouselItems.map((item, key) => (
        <li
          className="bg-home bg-animation-left d-flex align-items-center"
          key={key}
          style={{
            backgroundImage: `url(../../../../assets/images/nafal/home/carousel/${item.image})`,
          }}
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={7} className="slider-desc">
                <div
                  className="title-heading position-relative mt-4"
                  style={{ zIndex: '1' }}
                >
                  <h1
                    className="heading mb-3"
                    dangerouslySetInnerHTML={{ __html: item.h1 }}
                  ></h1>
                  <p className="para-desc">{item.p}</p>
                  {/* <div className="mt-4 pt-2">
                <Link
                  to={item.link}
                  id={'btn' + item.id}
                  className={item.btnclass}
                 >
                  {item.isVideo ? (
                    <FeatherIcon icon="video" className="icons" />
                  ) : (
                    <i className={item.iClass}></i>
                  )}
                  {item.btntext}
                </Link>
                {item.isVideo && (
                  <span className="fw-bold text-uppercase small align-middle ms-2">
                    Watch Now
                  </span>
                )}
              </div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </li>
      ))
    : null;

  return (
    <React.Fragment>
      {carouselSectionContent ? (
        <>
          <section className="main-slider">
            <Slider className="slides" {...settings}>
              {slides}
            </Slider>
          </section>

          {/* <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="yba7hPeTSjk"
        onClose={() => setIsOpen(false)}
      /> */}
        </>
      ) : null}
    </React.Fragment>
  );
};

export default Carousel;
