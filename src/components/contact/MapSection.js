import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

export default function MapSection() {
  return (
    <React.Fragment>
      <Container className="mt-100 mt-60 " fluid>
        <Row>
          <Col xs={12} className="p-0">
            <Card className="map border-0">
              <CardBody className="p-0">
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.1993881350722!2d46.80047655550285!3d24.685671684474652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x448c5c09c7a1c7e9%3A0xc5511f81ae714f68!2sNAFAL%20HVAC!5e0!3m2!1sen!2sin!4v1700257259615!5m2!1sen!2sin"       
                  style={{ border: '0' }}
                  className="rounded"
                  allowFullScreen
                ></iframe>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
