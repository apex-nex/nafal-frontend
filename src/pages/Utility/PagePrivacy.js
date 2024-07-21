import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, CardBody, Card } from 'reactstrap';
import MetaTags from 'react-meta-tags';
import { useAuth } from '../../store/auth';
import { privacyContent } from '../../data';
import { privacyContentArabic } from '../../data/indexArabic';

const PagePrivacy = () => {
    const { isArabic } = useAuth()
    const data = isArabic ? privacyContent : privacyContentArabic

    useEffect(() => {
        document.body.classList = '';
        const shoppingBtn = document.querySelector('.shoppingbtn');
        if (shoppingBtn) {
            shoppingBtn.classList.add('btn-primary');
        }
        window.addEventListener('scroll', scrollNavigation, true);

        return () => {
            window.removeEventListener('scroll', scrollNavigation, true);
        };
    }, []);

    const scrollNavigation = () => {
        var doc = document.documentElement;
        const navBar = document.getElementById('topnav');

        if (navBar) {
            var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

            if (top > 80) {
                navBar.classList.add('nav-sticky');
            } else {
                navBar.classList.remove('nav-sticky');
                const shoppingBtn = document.querySelector('.shoppingbtn');
                if (shoppingBtn) {
                    shoppingBtn.classList.add('btn-primary');
                    shoppingBtn.classList.remove('btn-light');
                }

                const settingBtn = document.querySelector('.settingbtn');
                if (settingBtn) {
                    settingBtn.classList.add('btn-soft-primary');
                }
            }
        }
    };

    return (
        <React.Fragment>
            <MetaTags>
                <title>{"Privacy | Etqan Nafal"}</title>
            </MetaTags>
            <section className="bg-half-170 bg-light d-table w-100 d-print-none">
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col lg={12} className="text-center">
                            <div className="pages-heading">
                                <h4 className="title">{data?.title}</h4>
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

            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <Card className="card shadow rounded border-0">
                                <CardBody>
                                    {/* Introduction */}
                                    <h5 className="card-title">{data?.introduction?.title}</h5>
                                    <p className="text-muted">{data?.introduction?.content}</p>

                                    {/* Collection of personal information */}
                                    <h5 className="card-title">{data?.collectionInfo?.title}</h5>
                                    <p className="text-muted">{data?.collectionInfo?.content}</p>

                                    {/* Use of personal information */}
                                    <h5 className="card-title">{data?.useInfo?.title}</h5>
                                    <p className="text-muted">{data?.useInfo?.content}</p>

                                    {/* User's personal information */}
                                    <h5 className="card-title">{data?.userPersonalInfo?.title}</h5>
                                    <p className="text-muted">{data?.userPersonalInfo?.content}</p>

                                    {/* Accessing, reviewing, and amending personal information */}
                                    <h5 className="card-title">{data?.accessingInfo?.title}</h5>
                                    <p className="text-muted">{data?.accessingInfo?.content}</p>

                                    {/* Third-party website links */}
                                    <h5 className="card-title">{data?.thirdPartyLinks?.title}</h5>
                                    <p className="text-muted">{data?.thirdPartyLinks?.content}</p>

                                    {/* Cookies */}
                                    <h5 className="card-title">{data?.cookies?.title}</h5>
                                    <p className="text-muted">{data?.cookies?.content}</p>

                                    {/* No spam or spoof emails */}
                                    <h5 className="card-title">{data?.noSpam?.title}</h5>
                                    <p className="text-muted">{data?.noSpam?.content}</p>

                                    {/* Protecting personal information */}
                                    <h5 className="card-title">{data?.protectingInfo?.title}</h5>
                                    <p className="text-muted">{data?.protectingInfo?.content}</p>

                                    {/* Contact us about privacy questions */}
                                    <h5 className="card-title">{data?.contactUs?.title}</h5>
                                    <p className="text-muted">{data?.contactUs?.content}</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default PagePrivacy;
