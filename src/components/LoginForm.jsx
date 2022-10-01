import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// yup schema to custom error validation
const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email() // by default = 'email must be a valid email'
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars min"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      // its function by yup lib
      // to create a cutsome error messages
      validationSchema={signInSchema}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;

        return (
          <Form className="my-10">
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className={
                    errors.email && touched.email
                      ? "w-full py-3 mb-2 border border-2 border-red-500 rounded-lg px-3 focus:outline-none focus:border-red-500 hover:shadow "
                      : "w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow "
                  }
                  placeholder="Enter email address"
                />

                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500"
                />
              </label>

              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className={
                    errors.password && touched.password
                      ? "w-full py-3 mb-2 border border-2 border-red-500 rounded-lg px-3 focus:outline-none focus:border-red-500 hover:shadow"
                      : "w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  }
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500"
                />
              </label>

              <button
                type="submit"
                disabled={!(dirty && isValid)}
                className={
                  dirty && isValid
                    ? "w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center "
                    : "cursor-not-allowed disabled:opacity-40 w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Login</span>
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
