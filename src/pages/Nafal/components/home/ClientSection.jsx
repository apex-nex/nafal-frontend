import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import mockData from '../../mock/mockHomePageData.json';

const ClientSection = () => {
  return (
    <React.Fragment>
      <section className="section">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12">
            <div className="section-title mb-4 pb-2 text-center">
              <h3 className="title mb-4">
                <span className="text-primary">Our Clients</span>
              </h3>
                <p className="text-muted para-desc mb-0 mx-auto">
                  At NAFAL HVAC, our clients' satisfaction is our ultimate goal. 
                  We are dedicated to providing exceptional products and services customized to their specific requirements. 
                  Their happiness and contentment inspire us to consistently surpass expectations.
                </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="col-12 mt-4 pt-2">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation
              breakpoints={{
                678: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 5,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Pagination, Autoplay, Navigation]}
              className="tiny-five-item"
            >
              <div className="tiny-slide">
                {mockData.data.clientsData.map((item, key) => (
                  <SwiperSlide key={key}>
                    <Card className="nft nft-primary nft-creator border-0 rounded-md shadow m-2">
                      <CardBody className="p-3">
                        <div className="content mt-3">
                          <div className="position-relative text-center">
                            <img
                              src={require(
                                `../../../../assets/images/client/${item.img}`,
                              )}
                              className="avatar avatar-small rounded-pill shadow"
                              alt=""
                            />

                            <div className="author mt-2">
                              <Link
                                to="#"
                                className="text-dark h6 name"
                              >
                                {item.title}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </Col>
        </Row>
      </Container>
      </section>
    </React.Fragment>
  );
};

export default ClientSection;
