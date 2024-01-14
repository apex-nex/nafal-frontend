import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'reactstrap';
import { useAuth } from "../../store/auth"
import { contactData, mapLocation } from '../../data';
import { contactDataArabic } from '../../data/indexArabic';

export default function ContactSection(props) {
  const { isArabic } = useAuth()
  const data = !isArabic ? contactData : contactDataArabic

  const { } = props;

  const onClickFunctionalities = (ele) => {
    if (ele.title === 'Location') {
      window.open(mapLocation, '_blank');
    }
  };

  return (
    <React.Fragment>
      {data ? (
        <React.Fragment>
          <Container>
            <Row>
              {data
                ? data?.map((ele, key) => (
                  <Col
                    md={4}
                    key={key}
                    className={
                      ele.sameClassName ? 'mt-4 mt-sm-0 pt-2 pt-sm-0' : ''
                    }
                  >
                    <Card className="border-0 text-center features feature-primary feature-clean">
                      <div className="icons text-center mx-auto">
                        <i
                          className={`uil ${ele.icon} d-block rounded h3 mb-0`}
                        ></i>
                      </div>
                      <div className="content mt-4">
                        <h5 className="fw-bold">{ele.title}</h5>
                        <p className="text-muted">{ele.discription}</p>
                        <Link
                          to="#"
                          className={
                            ele.textBold
                              ? 'video-play-icon h6 text-primary'
                              : 'text-primary'
                          }
                          onClick={() => {
                            onClickFunctionalities(ele);
                          }}
                        >
                          {ele.data.replace(/^(\+)/, '\u202D$1')}
                        </Link>
                      </div>
                    </Card>
                  </Col>
                ))
                : null}
            </Row>
          </Container>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
