import React from 'react';
import { Card, Col, Container, Form, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useAuth } from "../../store/auth"
import { toast } from 'react-toastify';
import FeatherIcon from "feather-icons-react";
import logoNafal from '../../assets/images/nafal/logo/nafal-logo.png';
import { post } from '../../components/helpers/api_helper';
import { useState, useEffect } from 'react';
import { ErrorMessageDisplay } from '../../common/data/utils/common';

const Login = () => {
    const { storeTokenInLS } = useAuth()
    const defaultLoginForm = { email: "", password: "" }
    const [user, setUser] = useState(defaultLoginForm)
    const [formError, setFormError] = useState(defaultLoginForm);

    // handling the input values
    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,
            [name]: value,
        })
    }

    // handling the login submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await post('/admin/login', user);

            if (response?.ok) {
                setUser(defaultLoginForm)
                storeTokenInLS(response.token)
                toast.success("Login successful redirecting to dashboard.");
                setTimeout(() => { window.location.replace("/admin/dashboard") }, 2000)
                setFormError(defaultContactForm);
            }
        } catch (error) {
            setFormError(error)
            toast.error(error);
        }
    };

    return (
        <React.Fragment>
            <div className="back-to-home">
                <Link to="/" className="back-button btn btn-icon btn-primary">
                    <i>
                        <FeatherIcon icon="arrow-left" className="icons" />
                    </i>
                </Link>
            </div>
            <section className="position-relative bg-home bg-circle-gradiant d-flex align-items-center">
                <div className="bg-overlay bg-overlay-white"></div>
                <Container fluid>
                    <Row>
                        <Col className="col-12 p-0">
                            <div className="d-flex flex-column min-vh-100 p-4">
                                <div className="text-center">
                                    <Link to="/"><img src={logoNafal} height="26" alt="Nafal" /></Link>
                                </div>
                                <div className="title-heading text-center my-auto">
                                    <Card className="form-signin px-4 py-5 rounded-md shadow-sm">
                                        <Form onSubmit={handleSubmit}>
                                            <h5 className="mb-4">Login</h5>
                                            <Row>
                                                <Col lg={12}>
                                                    <div className="form-floating mb-2">
                                                        <Input
                                                            name="email"
                                                            type="email"
                                                            className={formError?.email ? "form-control is-invalid" : "form-control"}
                                                            id="LoginEmail"
                                                            placeholder="name@example.com"
                                                            value={user.email}
                                                            onChange={handleInput}
                                                        />
                                                        <Label htmlFor="LoginEmail" className={formError?.email ? "form-label text-danger" : "form-label"}>
                                                            Email Address:
                                                        </Label>
                                                        <ErrorMessageDisplay error={formError?.email} />
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="form-floating mb-3">
                                                        <Input
                                                            name="password"
                                                            type="password"
                                                            className={formError?.password ? "form-control is-invalid" : "form-control"}
                                                            id="LoginPassword"
                                                            placeholder="Password"
                                                            value={user.password}
                                                            onChange={handleInput}
                                                        />
                                                        <ErrorMessageDisplay error={formError?.password} />
                                                        <Label htmlFor="LoginPassword" className={formError?.password ? "form-label text-danger" : "form-label"}>
                                                            Password:
                                                        </Label>
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="d-flex justify-content-end">
                                                        <small className="text-muted mb-3"><Link to="#auth-reset-password-bg-video.html" className="text-muted fw-semibold">Forgot password ?</Link></small>
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <button className="btn btn-primary rounded-md w-100" type="submit">Sign in</button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card>
                                </div>
                                <div className="text-center">
                                    <p className="mb-0">© {new Date().getFullYear()}{" "}
                                        Nafal. Design with <i className="mdi mdi-heart text-danger"></i> by {" "}
                                        <Link to="/" target="_blank" className="text-reset">Nafal</Link>.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Login;