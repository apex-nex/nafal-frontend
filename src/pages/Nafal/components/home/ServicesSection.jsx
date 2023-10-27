import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import FadeIn from "react-fade-in";
import work1 from "../../../../assets/images/construction/o1.jpg";
import work2 from "../../../../assets/images/construction/b1.jpg";
import work3 from "../../../../assets/images/construction/r1.jpg";
import work4 from "../../../../assets/images/construction/b2.jpg";
import work5 from "../../../../assets/images/construction/r2.jpg";
import work6 from "../../../../assets/images/construction/o2.jpg";

const ServiceSection = () => {
  const [displayCategory, setDisplayCategory] = useState("All");

  const works = [
    {
      image: work1,
      title: "Iphone mockup",
      subtitle: "Offices",
      category: "Offices",
    },
    {
      image: work2,
      title: "Mockup Collection",
      subtitle: "Mockup",
      category: "Buildings",
    },
    {
      image: work3,
      title: "Abstract images",
      subtitle: "Abstract",
      category: "Roads",
    },
    {
      image: work4,
      title: "Yellow bg with Books",
      subtitle: "Company V-card",
      category: "Buildings",
    },
    {
      image: work5,
      title: "Company V-card",
      subtitle: "V-card",
      category: "Roads",
    },
    {
      image: work6,
      title: "Mockup box with paints",
      subtitle: "Photography",
      category: "Offices",
    },
  ];

  const setCategory = (category) => {
    setDisplayCategory(category);
  };

  useEffect(() => {
    const scrollNavigation = () => {
      const doc = document.documentElement;
      const top =
        (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      const topnav = document.getElementById("topnav");
      if (top > 80 && topnav) {
        topnav.classList.add("nav-sticky");
      } else if (topnav) {
        topnav.classList.remove("nav-sticky");
      }
    };

    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  return (
    <React.Fragment>
      <Container className="mt-100 mt-60">
        <Row>
          <Col lg={4} md={6}>
            <div className="section-title sticky-bar position-sticky">
              <span className="badge rounded-pill bg-soft-primary">Projects</span>
              <h4 className="title mt-3 mb-4">
                Our latest projects <br /> check now dears
              </h4>
              <p className="text-muted para-desc mb-0">
                Start working with{" "}
                <span className="text-primary fw-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive traffic,
                connect.
              </p>
              <div className="mt-4 d-none d-md-block">
                <Link to="#" className="btn btn-soft-primary">
                  See More{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                  </i>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={8} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
            <Row>
              <div className="col-12 filters-group-wrap">
                <div className="filters-group">
                  <ul className="container-filter list-inline mb-0 filter-options" id="filter">
                    <li
                      onClick={() => setCategory("All")}
                      className={
                        displayCategory === "All"
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded "
                      }
                    >
                      All
                    </li>{" "}
                    <li
                      onClick={() => setCategory("Offices")}
                      className={
                        displayCategory === "Offices"
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded"
                      }
                    >
                      Offices
                    </li>{" "}
                    <li
                      onClick={() => setCategory("Buildings")}
                      className={
                        displayCategory === "Buildings"
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded"
                      }
                    >
                      Buildings
                    </li>{" "}
                    <li
                      onClick={() => setCategory("Roads")}
                      className={
                        displayCategory === "Roads"
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded"
                      }
                    >
                      Roads
                    </li>
                  </ul>
                </div>
              </div>
            </Row>
            <Row className="projects-wrapper">
              {works
                .filter(({ category }) => displayCategory === category || displayCategory === "All")
                .map(({ title, image, subtitle }, key) => (
                  <Col key={key} lg={6} xs={12} className="mt-4 pt-2 offices">
                    <FadeIn delay={100}>
                      <Card className="border-0 work-container work-classic shadow overflow-hidden">
                        <CardBody className="p-0">
                          <Link to="page-work-detail">
                            <img src={image} className="img-fluid work-image" alt="Landrick" />
                          </Link>
                          <div className="content p-4">
                            <h5 className="mb-0">
                              <Link to="page-work-detail" className="text-dark title">
                                {title}
                              </Link>
                            </h5>
                            <h6 className="text-muted tag mb-0">{subtitle}</h6>
                          </div>
                        </CardBody>
                      </Card>
                    </FadeIn>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ServiceSection;
