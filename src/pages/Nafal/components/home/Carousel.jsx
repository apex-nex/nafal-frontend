import React from 'react';
import { Col, Container, Row, UncontrolledCarousel } from 'reactstrap';

//import Images
//import Images
import img01 from '../../../../assets/images/real/1.jpg';
import img02 from '../../../../assets/images/real/2.jpg';
import img03 from '../../../../assets/images/real/3.jpg';

const Carousel = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xs="12">
              <section className="home-slider position-relative carousel-overlay">
                <div>
                  <div className="bg-overlay"></div>
                  <UncontrolledCarousel
                    interval={4000}
                    items={[
                      {
                        altText: ' ',
                        caption: ' ',
                        key: 1,
                        src: img01,
                      },
                      {
                        altText: ' ',
                        caption: ' ',
                        key: 2,
                        src: img02,
                      },
                      {
                        altText: ' ',
                        caption: ' ',
                        key: 3,
                        src: img03,
                      },
                    ]}
                  />
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
