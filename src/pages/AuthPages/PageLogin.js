import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label, Button, Card, CardBody, FormFeedback } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import FeatherIcon from "feather-icons-react";
import loginImg from "../../assets/images/admin/login.svg";
import { post } from "../../components/helpers/api_helper";
import { toast } from 'react-toastify';
import MetaTags from 'react-meta-tags';
import { useAuth } from "../../store/auth";

const PageLogin = () => {
  const { storeTokenInLS } = useAuth()
  const defaultLoginForm = { email: "", password: "" }
  const [user, setUser] = useState(defaultLoginForm)
  const [formError, setFormError] = useState(defaultLoginForm);
  const [loading, setLoading] = useState(false)

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
      password: Yup.string()
        .min(4, 'Password must be at least 8 characters')
        .required("Please Enter Password")
    }),
    onSubmit: (values) => {
      handleSubmit(values)
    }
  });

  // handling the login submission
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await post('/admin/login', values);
      if (response?.ok) {
        setUser(defaultLoginForm)
        storeTokenInLS(response.token)
        toast.success("Login successful.");
        setTimeout(() => { window.location.replace("/admin-dashboard") }, 1000)
        setFormError(defaultContactForm);
      }
    } catch (error) {
      setFormError(error)
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Nafal</title>
      </MetaTags>
      <div className="back-to-home">
        <Link to="/" className="back-button btn btn-icon btn-primary">
          <i>
            <FeatherIcon icon="arrow-left" className="icons" />
          </i>
        </Link>
      </div>
      <section className="bg-home d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={6}>
              <div className="me-lg-5">
                <img
                  src={loginImg}
                  className="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={5} md={6}>
              <Card className="login-page bg-white shadow rounded border-0">
                <CardBody>
                  <div className="card-title text-center">
                    <h4 className="mb-4">Login</h4>
                  </div>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                    className="login-form mt-4"
                  >
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="email">
                            Your Email <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            type="text"
                            className="form-control ps-5"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email || ""}
                            invalid={
                              validation.touched.email && validation.errors.email ? true : false
                            }
                          />
                          {validation.touched.email && validation.errors.email ? (
                            <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                          ) : null}
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="password">
                            Password <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="key"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            type="password"
                            className="form-control ps-5"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.password || ""}
                            invalid={
                              validation.touched.password && validation.errors.password ? true : false
                            }
                          />
                          {validation.touched.password && validation.errors.password ? (
                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                          ) : null}
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className="d-flex justify-content-between">
                          <div className="mb-3">
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="flexCheckDefault"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Remember me
                              </Label>
                            </div>
                          </div>
                          {/* <p className="forgot-pass mb-0">
                            <Link
                              to="auth-re-password"
                              className="text-dark fw-bold"
                            >
                              Forgot password ?
                            </Link>
                          </p> */}
                        </div>
                      </Col>
                      <Col lg={12} className="mb-0">
                        <div className="d-grid">
                          {loading ?
                            <Button color="primary" disabled>
                              Log in
                              <i className="bx bx-loader bx-spin font-size-16 align-middle ms-2"></i>
                            </Button>
                            :
                            <Button color="primary" >
                              Log in
                            </Button>
                          }
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );

}
export default PageLogin;
