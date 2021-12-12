import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import Typical from "react-typical";
import PayButton from "../Payment/PayButton";
import Typist from "react-typist";
function Connects() {
  const [value, setvalue] = useState("");
  return (
    <div className="flex flex-col items-center ">
      <div className=" py-5 font-thin text-3xl justify-center">
        {/* <Typical
          steps={["Buy Connects", 1000, "Work on Exciting Projects :)", 1000]}
          loop={2}
          wrapper="p"
          className=" font-thin text-3xl justify-center"
        /> */}
        {/* <Typist>
          <div className=""> Buy Connects</div>
          <div className="">Work on Exciting Projects :)</div>
        </Typist> */}
        <Typist>
          <span> Buy Connects </span>
          <Typist.Backspace count={16} delay={200} />
          <span> Work on Exciting Projects :) </span>
        </Typist>
      </div>
      <div className="py-16">
        <Formik
          initialValues={{
            quantity: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <div className="flex justify-center items-center space-x-10">
                <div
                  className={
                    values.quantity == 10
                      ? "ring ring-upworkgreen-copylink  rounded-md shadow-md "
                      : "border  rounded-md shadow-md  "
                  }
                >
                  <label>
                    <div className="p-10">
                      <Field
                        type="radio"
                        name="quantity"
                        value="10"
                        className="appearance-none "
                      />
                      <div className="flex flex-col justify-center items-center">
                        {" "}
                        <div className="">Quantity : 10</div>
                        <div className="">$2</div>
                      </div>
                    </div>
                  </label>
                </div>
                <div
                  className={
                    values.quantity == 25
                      ? "ring ring-upworkgreen-copylink  rounded-md shadow-md "
                      : "border  rounded-md shadow-md  "
                  }
                >
                  <label>
                    {" "}
                    <div className="p-10">
                      <Field
                        type="radio"
                        name="quantity"
                        value="25"
                        className="appearance-none"
                      />
                      <div className="flex flex-col justify-center items-center">
                        {" "}
                        <div className="">Quantity : 25</div>
                        <div className="">$5</div>
                      </div>
                    </div>
                  </label>
                </div>
                <div
                  className={
                    values.quantity == 50
                      ? "ring ring-upworkgreen-copylink  rounded-md shadow-md "
                      : "border  rounded-md shadow-md  "
                  }
                >
                  <label>
                    {" "}
                    <div className="p-10">
                      <Field
                        type="radio"
                        name="quantity"
                        value="50"
                        className="appearance-none"
                      />
                      <div className="flex flex-col justify-center items-center">
                        {" "}
                        <div className="">Quantity : 50</div>
                        <div className="">$10</div>
                      </div>
                    </div>
                  </label>
                </div>
                <div
                  className={
                    values.quantity == 100
                      ? "ring ring-upworkgreen-copylink  rounded-md shadow-md "
                      : "border  rounded-md shadow-md  "
                  }
                >
                  <label>
                    {" "}
                    <div className="p-10">
                      <Field
                        type="radio"
                        name="quantity"
                        value="100"
                        className="appearance-none"
                      />
                      <div className="flex flex-col justify-center items-center">
                        {" "}
                        <div className="">Quantity : 100</div>
                        <div className="">$20</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              {setvalue(values.quantity)}
            </Form>
          )}
        </Formik>
      </div>
      {value ? (
        <div>
          <PayButton quantity={value} />
        </div>
      ) : (
        <PayButton quantity={"0"} />
      )}
    </div>
  );
}

export default Connects;
