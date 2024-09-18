import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Col, Row, Form } from "antd";
import AppInput from "../Input/Input";
import AppButton from "../Button/Button";
import style from "./index.module.css";

function Profile({ handleReviewForm }) {
  const initialValues = {
    providerName: "",
    bio: "",
    emailAddress: "",
    phoneNumber: "",
    city: "",
    country: "",
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("hello");
        setSubmitting(true);
        handleReviewForm(values);
        localStorage.setItem("providerName", values.providerName);
        localStorage.setItem("bio", values.bio);
        localStorage.setItem("emailAddress", values.emailAddress);
        localStorage.setItem("phoneNumber", values.phoneNumber);
        localStorage.setItem("city", values.city);
        localStorage.setItem("country", values.country);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className={style.headline_h2}>Profile</div>
          <Row type={"flex"} justify={"center"} className="padding">
            <Col span={24}>
            <span className="typography14px">Providers name</span>
              <AppInput
                placeholder="Enter provider name"
                values={values.providerName}
                touched={touched.providerName}
                error={errors.providerName}
                onChange={handleChange}
                name="providerName"
                type="text"
              />
            </Col>
            <Col span={24}>
            <span className="typography14px">Bio</span>
              <AppInput
                placeholder="Enter your Bio"
                values={values.bio}
                touched={touched.bio}
                error={errors.bio}
                onChange={handleChange}
                name="bio"
                type="textarea"
              />
            </Col>
            <Col md={12} sm={24}>
            <span className="typography14px">Email address</span>
            <AppInput
                placeholder="Enter your email address"
                values={values.emailAddress}
                touched={touched.emailAddress}
                error={errors.emailAddress}
                onChange={handleChange}
                name="emailAddress"
                type="email"
              />
            </Col>
            <Col md={12} sm={24}>
            <span className="typography14px">Phone number</span>
              <AppInput
                placeholder="Enter your phone number"
                values={values.phoneNumber}
                touched={touched.phoneNumber}
                error={errors.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                type="phone"
              />
            </Col>
            <Col md={12} sm={24}>
            <span className="typography14px">City</span>
              <AppInput
                placeholder="Enter your city"
                values={values.city}
                touched={touched.city}
                error={errors.city}
                onChange={handleChange}
                name="city"
                type="text"
              />
            </Col>
            <Col md={12} sm={24}>
            <span className="typography14px">Country</span>
              <AppInput
                placeholder="Enter your country"
                values={values.country}
                touched={touched.country}
                error={errors.country}
                onChange={handleChange}
                name="country"
                type="text"
              />
            </Col>
            <Col span={24} className="text-center">
              <AppButton 
                label="Continue" 
                disabled={isSubmitting} 
                onClick={handleSubmit} 
              />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default Profile;
