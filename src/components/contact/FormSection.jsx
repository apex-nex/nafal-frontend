import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert, Form, Input, Label, Card, CardBody } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import contact from '../../assets/images/nafal/contact/contact.svg';
import { post } from '../helpers/api_helper';
import { toast } from 'react-toastify';
import { ErrorMessageDisplay } from '../../common/data/utils/common';

const FormSection = () => {
  const defaultContactForm = { name: "", email: "", mobile: "", subject: "", comments: "" }
  const [form, setForm] = useState(defaultContactForm);
  const [formError, setFormError] = useState(defaultContactForm);

  // handling the input values
  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value

    setForm({
      ...form,
      [name]: value,
    })
  }

  // handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post('/form', form);

      if (response?.ok) {
        toast.success("Details send successfully.");
        setForm(defaultContactForm);
        setFormError(defaultContactForm);
      }

    } catch (error) {
      console.log(error);
      if (error) {
        setFormError(error)
        toast.error(error);
      }
    }
  };

  return (
    <React.Fragment>
      <Container className="mt-100 mt-60">
        <Row className="align-items-center">
          <Col
            lg={5}
            md={6}
            className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
          >
            <Card className="shadow rounded border-0">
              <CardBody className="py-5">
                <h4 className="card-title">Get In Touch !</h4>
                <div className="custom-form mt-3">
                  <div id="message"></div>
                  <Form method="post" name="contact-form" id="contact-form" onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className={formError?.name ? "form-label text-danger" : "form-label"}>
                            Your Name <span className="text-danger">*</span>
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
                            name="name"
                            id="name"
                            type="text"
                            className={formError?.name ? "form-control ps-5 is-invalid" : "form-control ps-5"}
                            placeholder="First Name :"
                            value={form?.name}
                            required
                            onChange={handleInput}
                          />
                          <ErrorMessageDisplay error={formError?.name} />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className={formError?.email ? "form-label text-danger" : "form-label"}>
                            Your Email <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="mail"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="email"
                            id="email"
                            type="email"
                            className={formError?.email ? "form-control ps-5 is-invalid" : "form-control ps-5"}
                            placeholder="Your email :"
                            value={form?.email}
                            onChange={handleInput}
                            required
                          />
                          <ErrorMessageDisplay error={formError?.email} />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className={formError?.mobile ? "form-label text-danger" : "form-label"}>
                            Mobile <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="phone"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="mobile"
                            id="mobile"
                            className={formError?.mobile ? "form-control ps-5 is-invalid" : "form-control ps-5"}
                            placeholder="Your mobile :"
                            value={form?.mobile}
                            required
                            onChange={handleInput}
                          />
                          <ErrorMessageDisplay error={formError?.mobile} />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className={formError?.subject ? "form-label text-danger" : "form-label"}>
                            Subject <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="book"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="subject"
                            id="subject"
                            className={formError?.subject ? "form-control ps-5 is-invalid" : "form-control ps-5"}
                            placeholder="Your subject :"
                            value={form?.subject}
                            required
                            onChange={handleInput}
                          />
                          <ErrorMessageDisplay error={formError?.subject} />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className={formError?.comments ? "form-label text-danger" : "form-label"}>
                            Comments <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="message-circle"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className={formError?.comments ? "form-control ps-5 is-invalid" : "form-control ps-5"}
                            placeholder="Your Message :"
                            value={form?.comments}
                            required
                            onChange={handleInput}
                          />
                          <ErrorMessageDisplay error={formError?.comments} />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} className="text-center">
                        <div className="d-grid">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="submitBnt btn btn-primary"
                            value="Send Message"
                          />
                        </div>
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg={7} md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
            <Card className="border-0">
              <CardBody className="p-0">
                <img src={contact} className="img-fluid" alt="Nafal" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default FormSection
