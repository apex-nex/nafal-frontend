import React from 'react';
import { Card, Col, Container, Form, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from "feather-icons-react";
//import Images
import logoNafal from '../../assets/images/nafal/logo/nafal-logo.png';
import { post } from '../../components/helpers/api_helper';
import { useState, useEffect } from 'react';

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" })
    const [data, setData] = useState({})

    // useEffect(() => {
    //     if (data.message === "Login Successful") window.location.replace("/admin/dashboard")
    // }, [data])

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
            const data = await post('/admin/login', user);
            setData(data)


            if (data?.ok) {
                setUser({
                    email: "",
                    password: "",
                })
            }
        } catch (error) {
            console.log(error);
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
            <section className="position-relative">
                <div className="wrapper bg-gradient-primary"></div>
                <div className="bg-overlay bg-linear-gradient-2"></div>
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
                                                            className="form-control"
                                                            id="LoginEmail"
                                                            placeholder="name@example.com"
                                                            value={user.email}
                                                            onChange={handleInput}
                                                        />
                                                        <Label htmlFor="LoginEmail">Email Address:</Label>
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="form-floating mb-3">
                                                        <Input
                                                            name="password"
                                                            type="password"
                                                            className="form-control"
                                                            id="LoginPassword"
                                                            placeholder="Password"
                                                            value={user.password}
                                                            onChange={handleInput}
                                                        />
                                                        <Label htmlFor="LoginPassword">Password:</Label>
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
                                    <p className="mb-0 text-white">© {new Date().getFullYear()}{" "}
                                        Nafal. Design with <i className="mdi mdi-heart text-danger"></i> by {" "}
                                        <Link to="https://nafal-project.web.app" target="_blank" className="text-reset">Nafal</Link>.</p>
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