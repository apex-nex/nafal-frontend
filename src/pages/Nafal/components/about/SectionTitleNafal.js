import React from "react";
import { Row, Col } from "reactstrap";

export default function SectionTitleNafal(props) {
  const {keyFeatures} = props
  return (
    <React.Fragment>
      <Row className="justify-content-center">
          <Col className={props.isLeft ? "" : "col-12 text-center"}>
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4"> {keyFeatures.title}</h4>
              <p
                className={
                  props.isLeft
                    ? "text-muted para-desc mb-0"
                    : "text-muted para-desc mb-0 mx-auto"
                }
                name="sectiondesc"
              >
             {
              keyFeatures?.discription ? keyFeatures?.discription.map((ele, index) =>
                        (<span key={index} className={ele.highlight ? "text-primary fw-bold" : ""}>{ele.content}</span>)
                      ): null
                    }
                </p>
            </div>
          </Col>
        </Row>
    </React.Fragment>
  )
}
