import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const footerStyle = {
    // marginTop: "auto",
    backgroundColor: "#f8f9fa", // Add your desired background color
    padding: "20px",
  };

  const textBlockStyle = {
    textAlign: "end",
    fontSize: "14px",
  };

  return (
    <React.Fragment>
      <footer style={footerStyle}>
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

export default Footer;
