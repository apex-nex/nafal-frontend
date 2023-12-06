import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';
import contact from '../../assets/images/nafal/contact/contact.svg';
import { post } from '../helpers/api_helper';

export default function FormSection() {
  const [contactvisible, setContactvisible] = useState(false);
  const [values, setValues] = useState(null);

  const postData = async (values) => {
    try {
        const data = await post('/form', { values });
        setValues(data);
    } catch (error) {
        console.log(error);
    }
};

  const onSubmit = (e, v) => {
    e.preventDefault()
    postData(values)
  }

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
                  <Alert
                    color="primary"
                    isOpen={contactvisible}
                    toggle={() => {
                      setContactvisible({
                        contactvisible: !contactvisible,
                      });
                    }}
                  >
                    Contact details send successfully.
                  </Alert>
                  <Form method="post" name="contact-form" id="contact-form" onSubmit={onSubmit}>
                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className="form-label">
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
                            className="form-control ps-5"
                            placeholder="First Name :"
                            required
                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Your Email
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
                            className="form-control ps-5"
                            placeholder="Your email :"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                          />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className="form-label">
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
                            className="form-control ps-5"
                            placeholder="Your mobile :"
                            required
                            onChange={(e) => setValues({ ...values, mobile: e.target.value })}
                          />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className="form-label">Subject</Label>
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
                            className="form-control ps-5"
                            placeholder="Your subject :"
                            required
                            onChange={(e) => setValues({ ...values, subject: e.target.value })}
                          />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className="form-label">
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
                            className="form-control ps-5"
                            placeholder="Your Message :"
                            required
                            onChange={(e) => setValues({ ...values, comments: e.target.value })}
                          ></textarea>
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