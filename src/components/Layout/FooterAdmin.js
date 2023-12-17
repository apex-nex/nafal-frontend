import React from "react";
import { Container, Row, Col } from "reactstrap";

const FooterAdmin = () => {

  const textBlockStyle = {
    textAlign: "end",
    fontSize: "14px",
  };

  return (
    <React.Fragment>
      <footer style={{ padding: "20px" }} className="bg-light">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Nafal.</Col>
            <Col md={6}>
              <div style={textBlockStyle} className="d-none d-sm-block">
                All rights reserved by Nafal
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default FooterAdmin;
