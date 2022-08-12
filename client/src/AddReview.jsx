import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";


const addReview = () => {
  axios.post("http://localhost:3000/")
  .then((res) => {
    console.log('Posted!', res)
  }).catch((err) => {
    console.log(err)
  })
}

const AddReview = () => (
  <Formik
    initialValues={{ username: "", surname: "", comment: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      username: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      comment: Yup.string().required("Required")
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="usernmae">Username: </label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && "error"}
          />
          {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
          )}

          <label htmlFor="surname">Surname: </label>
          <input
            name="surname"
            type="text"
            placeholder="Enter your surname"
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.surname && touched.surname && "error"}
          />
          {errors.surname && touched.surname && (
            <div className="input-feedback">{errors.surname}</div>
          )}

          <label htmlFor="comment">Comment: </label>
          <input
            name="comment"
            type="text"
            placeholder="Enter your comment"
            value={values.comment}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.comment && touched.comment && "error"}
          />
          {errors.comment && touched.comment && (
            <div className="input-feedback">{errors.comment}</div>
          )}
          <button type="submit" disabled={isSubmitting}  onClick={addReview}>
            Add Review
          </button>
        </form>
      );
    }}
  </Formik>
);

export default AddReview;
