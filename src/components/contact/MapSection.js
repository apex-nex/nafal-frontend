import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { mapUrl } from '../../data';

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
                  src={mapUrl}       
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
