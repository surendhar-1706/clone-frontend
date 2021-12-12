import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
// import FormikStepper from "./FormikStepper";
export const FormikStepper = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setstep] = useState(0);
  const currentChild = childrenArray[step];
  useEffect(() => {
    console.log("from useEffect printing step", step);
  }, [step]);
  const isLastStep = () => {
    console.log("children Array", childrenArray);
    return step === childrenArray.length - 1;
  };
  return (
    <div>
      <Formik
        {...props}
        onSubmit={async (values, helpers) => {
          if (step === 2) {
            console.log("in if() await");
            await props.onSubmit(values, helpers);
          }
        }}
      >
        <Form>
          {currentChild}
          {step > 0 && (
            <button
              type="submit"
              onClick={() => {
                setstep(step - 1);
              }}
            >
              Back
            </button>
          )}{" "}
          {step <= 1 && (
            <button
              type="submit"
              onClick={() => {
                setstep(step + 1);
              }}
            >
              Next
            </button>
          )}
          {isLastStep() && <button type="submit">Submit</button>}
        </Form>
      </Formik>
    </div>
  );
};

function PostForm() {
  const initialValues = {
    firstname: "",
    email: "",
    millionr: false,
    total: "",
    description: "",
  };
  const onSubmit = (values, helpers) => {
    console.log("oiiiiiiiiiiiiiiiiiii-----------------", values);
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    // millionr: Yup.string().required("Required"),
    total: Yup.mixed().when("millionr", {
      is: true,
      then: Yup.number().required().min(100, "put a number greater than 100"),
      otherwise: Yup.number().required(),
    }),
    description: Yup.string().required("Required"),
  });

  return (
    <div className="h-screen flex justify-center">
      <FormikStepper
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <span>
          <div className="">
            <Field
              type="text"
              className="border block border-green-600 "
              name="firstname"
            />
            <ErrorMessage name="firstname" />
          </div>
          <div>
            <Field
              type="text"
              className="border  block border-green-600 "
              name="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <Field
              type="checkbox"
              className="border block border-green-600"
              name="millionr"
            />
            <ErrorMessage name="millionr" />
          </div>
        </span>
        <div>
          <Field
            type="text"
            className="border block border-green-600"
            name="total"
          />{" "}
          <ErrorMessage name="total" />
        </div>
        <div>
          {" "}
          <Field
            as="textarea"
            type="text"
            className="border block border-green-600"
            name="description"
          />
          <ErrorMessage name="description" />
        </div>
      </FormikStepper>
    </div>
  );
}

export default PostForm;
