import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import axios from "axios";

const Styles = styled.div`
  text-align: center;
  margin-top: 5%;
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    color: red;
  }
  .radio {
    margin-left: 15px;
  }
  Button {
    margin-top: 15px;
  }
`;

function Registration() {
  const initValues = {
    username: "",
    password: "",
    gender: "",
    birthday: "",
    height: "",
    weight: "",
    targetWeight: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(6).max(99).required(),
    gender: Yup.string().required(),
    birthday: Yup.date().required(),
    height: Yup.number().required().positive().integer(),
    weight: Yup.number().required().positive(),
    targetWeight: Yup.number().required().positive(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <Styles>
      <Formik
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-group">
          <h1>Register</h1>
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field autoComplete="off" id="" name="username" />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field type="password" autoComplete="off" id="" name="password" />

          <div id="my-radio-group">Gender</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field
                className="radio"
                name="gender"
                type="radio"
                value="male"
              />
              Male
            </label>
            <label>
              <Field
                className="radio"
                name="gender"
                type="radio"
                value="female"
              />
              Female
            </label>
          </div>

          <label>Birthday </label>
          <ErrorMessage name="birthday" component="span" />
          <Field
            autoComplete="off"
            id=""
            name="birthday"
            placeholder="YYYY-MM-DD"
          />

          <label>Height (cm): </label>
          <ErrorMessage name="height" component="span" />
          <Field autoComplete="off" id="" name="height" />

          <label>Weight: </label>
          <ErrorMessage name="weight" component="span" />
          <Field autoComplete="off" id="" name="weight" />

          <label>Target Weight: </label>
          <ErrorMessage name="targetWeight" component="span" />
          <Field autoComplete="off" id="" name="targetWeight" />

          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </Styles>
  );
}

export default Registration;
