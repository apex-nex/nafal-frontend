import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
// import FeatherIcon from 'feather-icons-react';
import Slider from 'react-slick';
// import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

// import bg01 from '../../../../assets/images/blog/bg1.jpg';
import bg01 from '../../../../assets/images/nafal/home/carousel/bg1.jpg'

const Carousel = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      id: 1,
      image: bg01,
      h1: 'Experience Comfort All Year Round',
      p: "Transform your home's climate with our expert HVAC services. We specialize in providing efficient heating, cooling, and ventilation solutions for your comfort.",
      btnclass: 'btn btn-icon btn-pills btn-primary lightbox',
      link: '#contact-us',
    },
    // {
    //   id: 2,
    //   image: bg02,
    //   h1: 'Meet Our Team of HVAC Experts',
    //   p: 'Our dedicated team of professionals is ready to serve you. Learn more about our experienced technicians, our commitment to quality, and our passion for exceptional HVAC services.',
    //   btnclass: 'btn btn-primary',
    //   btntext: 'About Us',
    //   link: '/about-us',
    //   iClass: 'mdi mdi-tools',
      
    // },
    // {
    //   id: 3,
    //   image: bg03,
    //   h1: 'Meet Our Team of HVAC Experts',
    //   p: 'Our dedicated team of professionals is ready to serve you. Learn more about our experienced technicians, our commitment to quality, and our passion for exceptional HVAC services.',
    //   btnclass: 'btn btn-primary mouse-down',
    //   btntext: 'Contact Us',
    //   link: '#contact-us',
    //   iClass: 'mdi mdi-home-thermostat',
      
    // },
  ];

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

  const slides = items.map((item, key) => (
    <li
      className="bg-home bg-animation-left d-flex align-items-center"
      key={key}
      style={{ backgroundImage: `url(${item.image})` }}
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
  ));

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Carousel;
