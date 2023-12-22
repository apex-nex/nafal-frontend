import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, CardBody, Card } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import MetaTags from 'react-meta-tags';

const PagePrivacy = () => {
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
        <>
            <MetaTags>
                <title>Privacy | Nafal</title>
            </MetaTags>
            <section className="bg-half-170 bg-light d-table w-100 d-print-none">
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col lg={12} className="text-center">
                            <div className="pages-heading">
                                <h4 className="title"> Privacy Policy </h4>
                            </div>
                        </Col>
                    </Row>

                    <div className="position-breadcrumb">
                        <nav aria-label="breadcrumb" className="d-inline-block">
                            <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                <li className="breadcrumb-item">
                                    <Link to="/">Nafal</Link>
                                </li>{" "}
                                <li className="breadcrumb-item">
                                    <Link to="#">Page</Link>
                                </li>{" "}
                                <li className="breadcrumb-item active" aria-current="page">
                                    Privacy
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </section>

            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <h5 className="card-title">Introduction :</h5>
                                    <p className="text-muted">
                                        Our privacy policy outlines how we collect, store, and use your personal information. This includes data associated with a specific person, used for identification. Anonymized information, which cannot identify a specific person, is not considered personal information.
                                    </p>
                                    <p className="text-muted">
                                        We collect personal information when you use www.nafal-hvac.sa/ or related services, like buying or contacting our support team. By providing your personal information, you consent to its processing according to our privacy policy. We may update the policy, and your continued use of the site implies consent to the revised terms. Please check the site regularly for any privacy policy updates.
                                    </p>

                                    {/* Our collection of your personal information */}
                                    <h5 className="card-title">Our collection of your personal information :</h5>
                                    <p className="text-muted">
                                        When using the site, we'll ask for personal details like your name, address, email, and phone number. To verify your identity, we may request proof like a passport copy. Financial info is needed in the "My Account" section for billing and order fulfillment. Keep personal and financial details in the My Account section to prevent fraud. We gather transactional data based on your site activities. Your IP address helps us analyze trends and manage the site. We may collect additional info, like your interaction with customer support or survey responses, to enhance your experience.
                                    </p>

                                    {/* Our use of your personal information */}
                                    <h5 className="card-title">Our use of your personal information :</h5>
                                    <p className="text-muted">
                                        We use your personal information to provide services, support, and enhance your experience. This includes preventing illegal activities and complying with our User Agreement. We may share information with third parties for verification and fraud prevention. While we prioritize privacy, disclosure may occur in legal or law enforcement situations.
                                    </p>
                                    <p className="text-muted">
                                        If Nafal is sold, your info may be shared for continued site provision. Personal data may be disclosed in item transactions, but otherwise, only with your explicit permission. We don't sell or rent personal info and only share it as outlined in this policy.
                                    </p>
                                    <p className="text-muted">
                                        By registering, you agree to receive promotional emails. You can opt out anytime. Your comments about the site may be used for marketing, with your express consent.
                                    </p>

                                    {/* Your use of your and other users’ personal information */}
                                    <h5 className="card-title">Your use of your and other users’ personal information :</h5>
                                    <p className="text-muted">
                                        Site members may share personal and financial details for transactions, and it's crucial to respect their privacy. We can't guarantee the privacy of your information when shared with other members, so always check their privacy and security policies before sharing. This policy doesn't cover your release of personal info to another member. Agree to use shared info solely for the transaction, following applicable laws. Your commitment to respecting privacy ensures a secure and trustworthy community.
                                    </p>

                                    {/* Accessing, reviewing and amending your personal information */}
                                    <h5 className="card-title">Accessing, reviewing and amending your personal information :</h5>

                                    <p className="text-muted">
                                        The Site may contains links to other websites. Please be aware that we are not responsible for the privacy practices of such other websites. We encourage you when you leave the Site to read the privacy statements of each and every website you visit if you intend to provide personal information to that website. Our privacy policy applies solely to your personal information that we collect on the Site.
                                    </p>

                                    {/* Third party website links */}
                                    <h5 className="card-title">Third party website links :</h5>
                                    <p className="text-muted">
                                        The Site may contain links to other websites. Please be aware that we are not responsible for the privacy practices of such other websites...
                                    </p>

                                    {/* Cookies */}
                                    <h5 className="card-title">Cookies :</h5>
                                    <p className="text-muted">
                                        The site utilizes 'cookie' technology, small files on your computer's hard drive. These cookies, identified by a unique, random number, enhance your site experience and provide insights into popular sections. They don't disclose personal information. You can decline cookies if your browser allows, but it may affect your site usage. Your control over cookie preferences ensures a personalized and efficient browsing experience.
                                    </p>

                                    {/* No spam or spoof emails */}
                                    <h5 className="card-title">No spam or spoof emails :</h5>
                                    <p className="text-muted">
                                        We do not tolerate spam. To report Site related spam or spoof emails, please forward the email to info@nafal-hvac.sa.sa
                                    </p>

                                    {/* Protecting your personal information */}
                                    <h5 className="card-title">Protecting your personal information :</h5>
                                    <p className="text-muted">
                                        By providing us with your personal information, you acknowledge and consent to the transfer of such information beyond the borders of the Kingdom of Saudi Arabia...
                                    </p>

                                    {/* How you can contact us about privacy questions */}
                                    <h5 className="card-title">How you can contact us about privacy questions :</h5>
                                    <p className="text-muted">
                                        If you have questions or concerns about our collection and use of your personal information, please contact our customer support team at the "info@nafal-hvac.sa".
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default PagePrivacy;
