import React, { useState } from 'react';
import { Container, Row, Col, Form, Input, Label, Card, CardBody, Button } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import { post } from '../helpers/api_helper';
import { toast } from 'react-toastify';
import { ErrorMessageDisplay } from '../../components/utils/common';
import { useAuth } from "../../store/auth"
import { formSection } from '../../data';
import { formSectionArabic } from '../../data/indexArabic';

const FormSection = () => {
  const { isArabic } = useAuth()
  const data = !isArabic ? formSection : formSectionArabic
  const defaultContactForm = { name: "", email: "", mobile: "", subject: "", comments: "" }
  const [form, setForm] = useState(defaultContactForm);
  const [formError, setFormError] = useState(defaultContactForm);
  const [loading, setLoading] = useState(false)

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
    setLoading(true);
    try {
      const response = await post('/form', form);

      if (response?.ok) {
        toast.success("Your message was sent successfully.");
        setForm(defaultContactForm);
        setFormError(defaultContactForm);
      }

    } catch (error) {
      console.log(error);
      if (error) {
        setFormError(error)
        toast.error(error);
      }
    } finally {
      setLoading(false);
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
                <h4 className="card-title">{data?.title}</h4>
                <div className="custom-form mt-3">
                  <div id="message"></div>
                  <Form method="post" name="contact-form" id="contact-form" onSubmit={handleSubmit}>
                    <Row>
                      {data?.formFields.map((field) => (
                        <Col md={field.name === 'name' || field.name === 'email' ? 6 : 12} key={field.name}>
                          <div className="mb-3">
                            <Label className={formError?.[field.name] ? "form-label text-danger" : "form-label"}>
                              {field.label} <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon icon={field.icon} className="fea icon-sm icons" />
                              </i>
                            </div>
                            {field.type === 'textarea' ? (
                              <textarea
                                name={field.name}
                                id={field.name}
                                rows="4"
                                className={formError?.[field.name] ? "form-control ps-5 is-invalid" : "form-control ps-5"}
                                placeholder={field.placeholder}
                                value={form?.[field.name]}
                                required
                                onChange={handleInput}
                              />
                            ) : (
                              <Input
                                name={field.name}
                                id={field.name}
                                type={field.type}
                                className={formError?.[field.name] ? "form-control ps-5 is-invalid" : "form-control ps-5"}
                                placeholder={field.placeholder}
                                value={form?.[field.name]}
                                onChange={handleInput}
                                required
                              />
                            )}
                            <ErrorMessageDisplay error={formError?.[field.name]} />
                          </div>
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col sm={12} className="text-center">
                        <div className="d-grid">
                          {loading ? (
                            <Button color="primary" disabled>
                              {data?.btnText}
                              <i className="bx bx-loader bx-spin font-size-16 align-middle ms-2"></i>
                            </Button>
                          ) : (
                            <Button color="primary" type="submit">
                              {data?.btnText}
                            </Button>
                          )}
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
                <img src={data?.img} className="img-fluid" alt="Nafal" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default FormSection
