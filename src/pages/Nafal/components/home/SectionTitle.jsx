import React from 'react'
import { Col, Row } from 'reactstrap'

function SectionTitle(props) {
  return (
    <React.Fragment>
    {/* <Row className="justify-content-center">
      <Col xs="12" className={this.props.isLeft ? "" : "text-center"}>
        <div className="section-title mb-4 pb-2" name="maintitle">
          <h4 className="title mb-4" name="sectiontitle">
            {" "}
            {this.props.title}{" "}
          </h4>
          <p
            className={
              this.props.isLeft
                ? "text-muted para-desc mb-0"
                : "text-muted para-desc mb-0 mx-auto"
            }
            name="sectiondesc"
          >
            Start working with{" "}
            <span className="text-primary fw-bold">Nafal</span>{" "}
            {this.props.desc}
          </p>
        </div>
      </Col>
    </Row> */}
    <Row className="justify-content-center">
      <Col className={props.isLeft ? "" : "col-12 text-center"}>
        <div className="section-title mb-4 pb-2">
          <h4 className="title mb-4"> {props.title}</h4>
          <p
            className={
              props.isLeft
                ? "text-muted para-desc mb-0"
                : "text-muted para-desc mb-0 mx-auto"
            }
            name="sectiondesc"
          >Start working with {" "}
            <span className="text-primary fw-bold">Nafal HVAC :</span> {props.desc}</p>
        </div>
      </Col>
    </Row>
  </React.Fragment>
  )
}

export default SectionTitle
