import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Import Images
import trane from "../../assets/images/nafal/home/companies/trane.png";
import daikin from "../../assets/images/nafal/home/companies/daikin.svg";
import gree from "../../assets/images/nafal/home/companies/gree.svg";
import midea from "../../assets/images/nafal/home/companies/midea.svg";
import fuji from "../../assets/images/nafal/home/companies/fuji.svg";
import lg from "../../assets/images/nafal/home/companies/lg.svg";

const Partners = () => {
    const partnersData = [
        { id: 2, img: daikin },
        { id: 1, img: trane },
        { id: 4, img: midea },
        { id: 5, img: fuji },
        { id: 6, img: lg },
        { id: 3, img: gree },
    ];

    return (
        <React.Fragment>
            <section className="py-4 border-bottom border-top bg-light">
                <Container>
                    <Row className="justify-content-center">
                        {partnersData.map((item, key) => (
                            <Col key={key} lg={2} md={3} className="col-6 text-center py-4">
                                <img
                                    src={item.img}
                                    className="avatar avatar-ex-sm center"
                                    alt=""
                                    style={{ height: '80px', objectFit: 'contain' }}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Partners;
