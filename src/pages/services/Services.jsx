// React Basic and Bootstrap
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import MetaTags from 'react-meta-tags';

//Import Images
import work1 from "../../assets/images/work/1.jpg";
import work2 from "../../assets/images/work/2.jpg";
import work3 from "../../assets/images/work/3.jpg";
import work4 from "../../assets/images/work/4.jpg";

import ServicesSection from '../../components/home/ServicesSection';
import homeContent from '../../common/data/home/homeContent.json';
import ClientSection from '../../components/home/ClientSection';
import { useState } from 'react';

import FeatherIcon from 'feather-icons-react';

const servicesSectionContent = homeContent?.data?.homePage?.sections?.servicesSection
const clientSectionConent = homeContent?.data?.homePage?.sections?.clientSection


const Services = () => {
    const [cardData, setCardData] = useState([
        { title: "Home Conditioners", description: "Efficient cooling solutions for residential spaces.", icon: 'uil-air-conditioner' },
        { title: "Package AC", description: "High-performance commercial HVAC systems for businesses.", icon: 'uil uil-store-alt' },
        { title: "Air20", description: "Cutting-edge and innovative HVAC technology for advanced cooling.", icon: 'uil uil-windsock' },
        { title: "Concealed", description: "Smart building solutions with discreet HVAC integration.", icon: 'uil uil-building' },
        { title: "AC Maintenance", description: "Proactive maintenance services for architectural HVAC systems.", icon: 'mdi mdi-air-conditioner' },
        { title: "Duct Construction And Design", description: "Showcasing exceptional projects through expert duct construction and design.", icon: 'uil uil-drafting-compass' },
    ]);

    const features = [
        { id: 1, icon: 'uil uil-edit-alt h2 text-primary', title: "Design & Development", description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
        { id: 2, icon: 'uil uil-vector-square h2 text-primary', title: "Management & Marketing", description: "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
        { id: 3, icon: 'uil uil-file-search-alt h2 text-primary', title: "Stratagy & Research", description: "It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today." },
        { id: 4, icon: 'uil uil-airplay h2 text-primary', title: "Easy To Use", description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper." },
        { id: 5, icon: 'uil uil-calendar-alt h2 text-primary', title: "Daily Reports", description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word." },
        { id: 6, icon: 'uil uil-clock h2 text-primary', title: "Real Time Zone", description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today." },
    ];
    const works = [
        { imgUrl: work1, title: "Shifting Perspective", subtitle: "Studio", author: "Calvin Carlo", date: "13th August, 2019" },
        { imgUrl: work2, title: "Colors Magazine", subtitle: "Web Design", author: "Calvin Carlo", date: "13th August, 2019" },
        { imgUrl: work3, title: "Spa Cosmetics", subtitle: "Developing", author: "Calvin Carlo", date: "13th August, 2019" },
        { imgUrl: work4, title: "Riser Coffee", subtitle: "Branding", author: "Calvin Carlo", date: "13th August, 2019" },
    ];
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
                <section className="bg-half-170 bg-light d-table w-100">
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={12} className="text-center">
                                <div className="pages-heading">
                                    <h4 className="title mb-0"> Services </h4>
                                </div>
                            </Col>
                        </Row>

                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Nafal</Link></li>{" "}
                                    <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                                </ul>
                            </nav>
                        </div>
                    </Container>
                </section>

                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                        <div className="services-container">
                            <ServicesSection servicesSectionContent={servicesSectionContent} />
                        </div>
                        <div className="clients-section">
                            <ClientSection clientSectionConent={clientSectionConent} />
                        </div>
                    </Container>
                </section>
            </div>
        </React.Fragment>
    );
}
export default Services;
