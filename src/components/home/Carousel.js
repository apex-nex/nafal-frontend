import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import FeatherIcon from "feather-icons-react";
import { carouselData } from "../../data";

const Carousel = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    var e1 = document.getElementsByClassName("slick-slide");
    for (var i = 0; i < 3; i++) {
      if (i === 0) e1[i].style.backgroundImage = `url(${carouselData[0].image})`;
      if (i === 1) e1[i].style.backgroundImage = `url(${carouselData[1].image})`;
      if (i === 2) e1[i].style.backgroundImage = `url(${carouselData[2].image})`;
    }

    const openModal = () => setIsOpen(true);
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", openModal);

    return () => {
      btn1.removeEventListener("click", openModal);
    };
  }, []);


  const openModal = () => {
    setIsOpen(true);
  };

  var settings = {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    draggable: true,
    pauseOnHover: true,
  };

  const slides = carouselData.map((item, key) => (
    <li
      className="bg-home bg-animation-left d-flex align-items-center"
      key={key}
      style={{ backgroundImage: `url(${item.image})` }}
    >

      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={7} className="slider-desc">
            <div className="title-heading position-relative mt-4 carousel-arabic" style={{ zIndex: "1" }}>
              <h1
                className="heading mb-3"
                dangerouslySetInnerHTML={{ __html: item.h1 }}
              ></h1>
              <p className="para-desc">{item.p}</p>
              <div className="mt-4 pt-2">
                <Link
                  to={item.link}
                  id={"btn" + item.id}
                  className={item.btnclass}
                  onClick={openModal}
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
                    {item.buttontext}
                  </span>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </li>
  ));

  return (
    <>
      <section className="main-slider">
        <Slider className="slides" {...settings}>
          {slides}
        </Slider>
      </section>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="8_FJEMH8hx0"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Carousel;
