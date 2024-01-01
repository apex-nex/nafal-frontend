import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import userInterface from "../../assets/images/home/download/user_interface.svg";
import { appData } from "../../data";
function DownloadAppSection() {
  return (
    <React.Fragment>
      <section className="section pt-0 border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col
              lg={5}
              md={{ size: 5, order: 2 }}
              xs={{ size: 12, order: 1 }}
            >
              <img
                src={userInterface}
                className="img-fluid mx-auto d-block"
                alt="Nafal"
              />
            </Col>
            <Col
              lg={7}
              md={{ size: 7, order: 1 }}
              xs={{ size: 12, order: 2 }}
              className="mt-4 mt-sm-0 pt-2 pt-sm-0"
            >
              <div className="section-title">
                <h4 className="title mb-4">
                  {appData?.title1} <br /> {appData?.title2}
                </h4>
                <p className="text-muted para-desc mb-0">
                {appData?.description1}{" "}
                  <span className="text-primary fw-bold">
                  {appData?.highlightedText}
                  </span>{" "}
                  {appData?.description2}
                </p>
                <div className="my-4">
                  <Link to="/app-comingsoon" className="btn btn-lg btn-dark mt-2 me-2">
                    <i className="mdi mdi-apple"></i> {appData?.appStoreTitle}
                  </Link>
                  <Link to="/app-comingsoon" className="btn btn-lg btn-dark mt-2 ms-1">
                    <i className="mdi mdi-google-play"></i> {appData?.playStoreTitle}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default DownloadAppSection
