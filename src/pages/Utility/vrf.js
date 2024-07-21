import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardHeader, Collapse } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import MetaTags from 'react-meta-tags';
import { useAuth } from '../../store/auth';
import { vrfContent } from "../../data";
import { vrfContentArabic } from "../../data/indexArabic";

const Vrf = () => {
  const { isArabic } = useAuth()
  const data = isArabic ? vrfContent : vrfContentArabic

  const [col1, setCol1] = useState(false);
  const [col2, setCol2] = useState(false);
  const [col3, setCol3] = useState(false);
  const [col4, setCol4] = useState(false);

  const toggleAccordion = (accordion) => {
    switch (accordion) {
      case 1:
        setCol1(!col1);
        break;
      case 2:
        setCol2(!col2);
        break;
      case 3:
        setCol3(!col3);
        break;
      case 4:
        setCol4(!col4);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.body.classList = "";
    const shoppingBtn = document.querySelector(".shoppingbtn");
    if (shoppingBtn) {
      shoppingBtn.classList.add("btn-primary");
    }
    window.addEventListener("scroll", scrollNavigation, true);

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById("topnav");

    if (navBar) {
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

      if (top > 80) {
        navBar.classList.add("nav-sticky");
      } else {
        navBar.classList.remove("nav-sticky");
        const shoppingBtn = document.querySelector(".shoppingbtn");
        if (shoppingBtn) {
          shoppingBtn.classList.add("btn-primary");
          shoppingBtn.classList.remove("btn-light");
        }

        const settingBtn = document.querySelector(".settingbtn");
        if (settingBtn) {
          settingBtn.classList.add("btn-soft-primary");
        }
      }
    }
  };

  return (
    <React.Fragment>
      {/* breadcrumb */}
      <MetaTags>
        <title>VRF System | Etqan Nafal</title>
      </MetaTags>
      <section className="bg-half-170 bg-light d-table w-100">
        <Container>
          <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div className="pages-heading">
                <h4 className="title mb-0"> {data.title} </h4>
              </div>
            </Col>
          </Row>

          <div className="position-breadcrumb">
            <nav aria-label="breadcrumb" className="d-inline-block">
              <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                {data.breadcrumb.map((item, index) => (
                  <li className={item.className} key={index}>
                    {item.link ? <Link to={item.link}>{item.name}</Link> : item.name}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </section>

      <div className="position-relative">
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

      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <Card className="shadow border-0 rounded">
                <CardBody>
                  <h5 className="card-title">{data.introductionTitle}</h5>
                  <p className="text-muted">{data.introduction}</p>

                  <h5 className="card-title mt-4">{data.tableOfContentsTitle}</h5>
                  <ul className="list-unstyled feature-list text-muted">
                    {data.tableOfContents.map((item, index) => (
                      <li key={index}>
                        <i>
                          <FeatherIcon icon={isArabic ? "arrow-right" : "arrow-left"} className="fea icon-sm me-2" />
                        </i>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h5 className="card-title mt-4">{data.whatIsVrf.title}</h5>
                  {data.whatIsVrf.text.map((item, index) =>
                    <p className="text-muted" key={index}>{item}</p>
                  )}

                  <h5 className="card-title mt-4">{data.components.title}</h5>
                  {data.components.types.map((item, index) =>
                    <div key={index}>
                      <p className="text-muted">{index + 1} {item.title}</p>
                      <p className="text-muted">{item.text}</p>
                    </div>
                  )}

                  <h5 className="card-title mt-4">{data.features.title}</h5>
                  {data.features.types.map((item, index) =>
                    <div key={index}>
                      <b className="text-muted">{index + 1} {item.title}</b>
                      <p className="text-muted">{item.text}</p>
                    </div>
                  )}

                  <h5 className="card-title mt-4">{data.features.title}</h5>
                  <ul>
                  {data.features.types.map((point, index) => (
                      <li className="text-muted mt-0 mb-2" key={index}>
                        <b>{point.title}: </b>{point.text}
                      </li>
                  ))}
                  </ul>

                  <h5 className="card-title mt-4">{data.installation.title}</h5>
                  <b className="text-muted ">{data.installation.boldText}</b>
                  <ul>
                  {data.installation.types.map((point, index) => (
                      <li className="text-muted mt-0 mb-2" key={index}>
                        <b>{point.title}: </b>{point.text}
                      </li>
                  ))}
                    </ul>

                  <h5 className="card-title mt-4">{data.applications.title}</h5>
                  <b className="text-muted">{data.applications.boldText}</b>
                  <ul>
                  {data.applications.types.map((point, index) => (
                      <li className="text-muted mt-0 mb-2" key={index}>
                        <b>{point.title}: </b>{point.text}
                      </li>
                  ))}
                  </ul>

                  <h5 className="card-title mt-4">{data.cost.title}</h5>
                  {data.cost.text.map((item, index) =>
                    <p className="text-muted" key={index}>{item}</p>
                  )}

                  <h5 className="card-title mt-4">{data.capabilities.title}</h5>
                  {data.capabilities.text.map((item, index) =>
                    <p className="text-muted" key={index}>{item}</p>
                  )}

                  <h5 className="card-title mt-4">{data.conditioning.title}</h5>
                  {data.conditioning.text.map((item, index) =>
                    <p className="text-muted" key={index}>{item}</p>
                  )}

                  <h5 className="card-title mt-4">{data.maintenance.title}</h5>
                  {data.maintenance.text.map((item, index) =>
                    <p className="text-muted" key={index}>{item}</p>
                  )}

                  <h5 className="card-title mt-4">{data.system.title}</h5>
                  {data.system.text.map((item, index) =>
                    <p className="text-muted" key={index}>{item}</p>
                  )}

                  <div className="mt-3">
                    {data.buttons.map((button, index) => (
                      <Link key={index} to={button.to} className={button.className}>
                        {button.label}
                      </Link>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default Vrf;
