import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { partnersData } from '../../data';

const Partners = () => {
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
