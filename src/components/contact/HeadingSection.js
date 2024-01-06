import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { useAuth } from "../../store/auth"
import { headingSection } from '../../data';

export default function HeadingSection() {
  const { isArabic } = useAuth()
  const data = !isArabic ? headingSection : headingSection
  return (
    <React.Fragment>
      <section className="bg-half-170 bg-light d-table w-100">
        <Container>
          <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div className="pages-heading">
                <h4 className="title mb-0">{headingSection?.title}</h4>
              </div>
            </Col>
          </Row>

          <div className="position-breadcrumb">
            <nav aria-label="breadcrumb" className="d-inline-block">
              <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                {data?.breadcrumb?.map((item, index) => (
                  <li className={item?.className} key={index}>
                    {item?.link ? <Link to={item.link}>{item.name}</Link> : item?.name}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </section>
      <div className="form-icon position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}
