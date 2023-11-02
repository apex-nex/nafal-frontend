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
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3625.1987275094607!2d46.8026111!3d24.685694400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQxJzA4LjUiTiA0NsKwNDgnMDkuNCJF!5e0!3m2!1sen!2sin!4v1698930124535!5m2!1sen!2sin"                  style={{ border: '0' }}
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
