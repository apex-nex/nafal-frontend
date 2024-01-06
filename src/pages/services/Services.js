import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import MetaTags from 'react-meta-tags';
import { useState } from 'react';
import ServicesSection from '../../components/home/ServicesSection';
import { useAuth } from '../../store/auth';
import { serviceData } from '../../data';

const Services = () => {
    const { isArabic } = useAuth()
    const data = !isArabic ? serviceData : serviceData
    const [isSeeMore, setIsseeMore] = useState(false)

    useEffect(() => {
        const shoppingBtn = document.querySelector(".shoppingbtn");
        if (shoppingBtn) {
            shoppingBtn.classList.add("btn-primary");
        }
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var doc = document.documentElement;
        const navBar = document.getElementById("topnav");
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        if (navBar != null) {
            if (top > 80) {
                navBar.classList.add("nav-sticky");
                const shoppingBtn = document.querySelector(".shoppingbtn");
                if (shoppingBtn) {
                    shoppingBtn.classList.add("btn-primary");
                    shoppingBtn.classList.remove("btn-light");
                }
                const settingBtn = document.querySelector(".settingbtn");
                if (settingBtn) {
                    settingBtn.classList.add("btn-soft-primary");
                }
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
            <div className="page-content">
                <MetaTags>
                    <title>Services | Nafal</title>
                </MetaTags>
                {data ?
                    <>
                        <section className="bg-half-170 bg-light d-table w-100">
                            <Container>
                                <Row className="mt-5 justify-content-center">
                                    <Col lg={12} className="text-center">
                                        <div className="pages-heading">
                                            <h4 className="title mb-0"> {data?.page_heading}</h4>
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
                        <ServicesSection seeMore={false} />
                        <section className="section">
                            <Container>
                                <Row>
                                    {data?.features_list ? data?.features_list.slice(0, isSeeMore ? data?.features_list?.length : 6).map((item, key) => (
                                        <Col key={key} md={4} className="col-12 mt-5">
                                            <div className="features feature-primary">
                                                <div className="image position-relative d-inline-block">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="content mt-4">
                                                    <h5>{item.title}</h5>
                                                    <p className="text-muted mb-0">{item.description}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    )) : null}
                                    <Col xs={12} className="text-center mt-4 pt-2">
                                        <Link to="#" className="btn btn-primary"
                                            onClick={() => { setIsseeMore(!isSeeMore) }}
                                        >
                                            {isSeeMore ? "Hide More" : "See More"} <i className={`mdi mdi-arrow-${isSeeMore ? 'up' : 'down'}`}></i>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <div className="section bg-light">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col xs="12" className="text-center">
                                        <div className="section-title">
                                            <h4 className="title mb-4">{data?.endSection?.title}</h4>
                                            <p className="text-muted para-desc mx-auto">
                                                {data?.endSection?.description.map((item, index) => (
                                                    item.type === "highlighted" ? (
                                                        <span key={index} className="text-primary fw-bold">{" "}{item.content}{" "}</span>
                                                    ) : (
                                                        <span key={index}>{item.content}</span>
                                                    )
                                                ))}
                                            </p>
                                            <div className="mt-4 pt-2">
                                                <Link to="/contact-us" className="btn btn-primary mt-2 me-2">
                                                    {data?.endSection?.buttonText}
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </>
                    : null
                }
            </div>
        </React.Fragment>
    );
}
export default Services;