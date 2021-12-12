import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMinus } from "react-icons/ai";
import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import { IoIosAdd } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { IoPricetagSharp } from "react-icons/io5";
import * as Yup from "yup";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdAvTimer } from "react-icons/md";
import { Line } from "rc-progress";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Disclosurecomponent from "./Disclosurecomponent";
import { AnimatePresence } from "framer-motion";

const Wizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;
  // const [value_state, set_value_state] = useState();
  const next = (values) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form className="">
          <p>{/* Step {stepNumber + 1} of {totalSteps} */}</p>
          {step}
          {/* <hr /> */}
          <div className="flex my-4 mx-2 space-x-4 justify-end">
            {stepNumber > 0 && (
              <button
                className="px-8 py-1 hover:bg-gray-50  text-upworkgreen-light border font-semibold rounded-full"
                onClick={() => previous(formik.values)}
                type="button"
              >
                Back
              </button>
            )}
            {stepNumber === 0 && (
              <Link href="/post">
                <a className="px-8 py-1 text-green-500 hover:underline  font-semibold ">
                  Cancel
                </a>
              </Link>
            )}
            <div className="">
              <button
                className="px-8 py-1 hover:bg-green-700 bg-green-600 text-white font-semibold rounded-full"
                disabled={formik.isSubmitting}
                type="submit"
              >
                {isLastStep ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
//takes on individual form component and can add individual validation schema
const WizardStep = ({ children }) => children;

const WizardApp = () => {
  const [radio_value, set_radio_value] = useState();

  return (
    <div className=" border">
      <Wizard
        initialValues={{
          work_duration: "Less than 30 hours",
          //
          title: "rest____framework",
          job_category: "Web design",
          //
          skill_required_for_job: [{ name: "" }],
          //
          scope: "Expert",
          //
          total_pay: "",
          if_total_then_pay: 50,
          if_hourly_then_pay_one: 5,
          if_hourly_then_pay_two: 10,
          job_description:
            "As opposed to previously discussed references to another entity, the referred entity can instead also be embedded or nested in the representation of the object that refers to it. Such nested relationships can be expressed by using serializers as fields.",
        }}
        onSubmit={async (values, onSubmitProps) => {
          // console.log(
          //   "Wizard submit hhhhhhhhhaaaaaaaaaa",
          //   values.skill_required_for_job
          // );
          // console.log("On submit props", onSubmitProps);
          const token = localStorage.getItem("access_token");
          // console.log(process.env.NEXT_PUBLIC_API_URL + "/api/post/data");
          const data = await fetch(
            process.env.NEXT_PUBLIC_API_URL + "/api/post/data",
            {
              method: "post",
              headers: {
                Authorization: "JWT " + token,
                "Content-Type": "application/json",
                accept: "application/json",
              },
              body: JSON.stringify({
                skill: values.skill_required_for_job,
                title: values.title,
                description: values.job_description,
                category: values.job_category,
                freelancer_type: values.scope,
                pay_type: values.total_pay,
                from_price: values.if_hourly_then_pay_one,
                to_price: values.if_hourly_then_pay_two,
                fixed_price: values.if_total_then_pay,
                weekly_length: values.work_duration,
                // total_length: values.work_duration,
              }),
            }
          );
          // console.log("access token-----------------", token);
          const json_data = await data.json();
          console.log(json_data);
          onSubmitProps.setSubmitting(false);
        }}
      >
        <WizardStep
          onSubmit={(values) => console.log("newStep1 onSubmit", values)}
          validationSchema={Yup.object({
            work_duration: Yup.string().required("Please Fill the duration"),
          })}
        >
          <div className="py-5 px-8 font-semibold text-2xl">
            Getting Started
          </div>
          <hr />
          <div className="py-8 px-8 flex space-x-10">
            <span className="relative border rounded-md border-gray-300 hover:bg-gray-50 hover:border-green-500 cursor-pointer">
              <div className="absolute top-0 right-2">
                <Field
                  type="radio"
                  name="work_duration"
                  value="Less than 30 hours"
                />
              </div>
              <div className="mt-5  flex justify-center">
                <MdAvTimer className="" size={25} />
              </div>
              <span className="flex justify-center p-5">
                <span>
                  <div className="text-lg font-semibold">
                    Short term or part time work
                  </div>
                  <div className="pt-3 px-4 font-light text-md text-gray-600">
                    {" "}
                    Less than 30 hrs/week
                  </div>
                  <div className="pt-1 px-6  font-light text-gray-600">
                    {" "}
                    Less than 3 months
                  </div>
                </span>
              </span>
            </span>
            <span className="p-2 relative border rounded-md border-gray-300 hover:bg-gray-50 cursor-pointer hover:border-green-500">
              <div className="absolute top-0 right-2">
                <Field type="radio" name="work_duration" value="Longterm" />
              </div>{" "}
              <div className="mt-5  flex justify-center">
                <AiTwotoneCalendar size={25} />
              </div>{" "}
              <span className="flex justify-center p-5">
                <span>
                  <div className="text-lg font-semibold">
                    Designated, longer term work
                  </div>
                  <div className="pt-3 px-4 font-light text-md text-gray-600">
                    More than 30 hrs/week
                  </div>
                  <div className="pt-1 px-6  font-light text-gray-600">
                    3+ months
                  </div>
                </span>
              </span>
            </span>
          </div>
          <ErrorMessage name="work_duration" />
          <hr />
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            title: Yup.string().required("Please Fill the title"),
            job_category: Yup.string().required("Please Fill the job category"),
            job_description: Yup.string().required(
              "Please Fill the Job Description"
            ),
          })}
        >
          <span className="grid grid-cols-8">
            <div className="col-span-4 bg-upworkgreen-form text-white rounded px-4 ">
              <span className="">
                <Line
                  percent="25"
                  strokeWidth="2"
                  trailWidth="2"
                  trailColor="#2B5468"
                  strokeColor="#95DE01"
                  strokeLinecap="round"
                  className="pt-8 pb-2 px-0"
                />
                <div className="flex justify-between  text-sm md:mb-20">
                  <span className="text-upworkgreen-bar">Title</span>
                  <span>Skills</span>
                  <span>Scope</span>
                  <span>Budget</span>
                </div>
              </span>
              <span className="text-4xl font-semibold ">
                Let us start with a strong title.
              </span>
              <div className="py-4 text-md">
                This helps your job post stand out to the right candidates. It’s
                the first thing they’ll see, so make it count!
              </div>
            </div>
            {/* other part of the div */}
            <div className="px-4 pb-8 md:pb-28 md:px-8 col-span-4 pt-36">
              <span>
                <div className="pt-4 font-semibold pb-2">
                  Write a title for your job post
                </div>
                <div className="block">
                  {" "}
                  <Field className="border w-full mb-4 h-10 " name="title" />
                </div>
                <div className="">
                  <span className="font-semibold"> Example titles</span>{" "}
                  <div className="py-2  text-gray-700">
                    • Build responsive WordPress site with booking/payment
                    functionality
                  </div>{" "}
                  <div className=" text-gray-700">
                    {" "}
                    • AR experience needed for virtual product demos (ARCore)
                  </div>
                  <div className=" text-gray-700">
                    {" "}
                    • Developer needed to update Android app UI for new
                    OS/device specs
                  </div>
                </div>
              </span>

              <div>
                <div className="font-semibold pt-3">Job category</div>
                <div className="space-y-1">
                  <span className="flex items-center gap-x-2">
                    <Field
                      type="radio"
                      className="border "
                      name="job_category"
                      value="Web design"
                    />
                    <div>Web design</div>
                  </span>
                  <span className="flex items-center gap-x-2">
                    <Field
                      type="radio"
                      className="border"
                      name="job_category"
                      value="BackEnd"
                    />
                    <div>Backend</div>
                  </span>
                  <span className="flex items-center gap-x-2">
                    <Field
                      type="radio"
                      className="border"
                      name="job_category"
                      value="FullStack"
                    />
                    <div>FullStack</div>
                  </span>
                </div>
              </div>
              <ErrorMessage name="title" />
              <ErrorMessage name="job_category" />
              <div className="md:py-2">
                <div className="font-semibold "> Job Description</div>
                <div className="py-2 w-full">
                  <Field
                    name="job_description"
                    as="textarea"
                    className="border w-full md:h-36 focus:outline-none focus:ring-1 focus:ring-green-500   text-right"
                  />
                </div>{" "}
                <div className="text-red-500 tracking-tighter text-sm">
                  {" "}
                  <ErrorMessage name="job_description" />
                </div>
              </div>
            </div>
          </span>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            skill_required_for_job: Yup.array().required(
              "This field is requireds"
            ),
          })}
        >
          <span className="grid grid-cols-8">
            <div className="pb-40 col-span-4 bg-upworkgreen-form text-white rounded px-4 md:px-8">
              <span className="">
                <Line
                  percent="50"
                  strokeWidth="2"
                  trailWidth="2"
                  trailColor="#2B5468"
                  strokeColor="#95DE01"
                  strokeLinecap="round"
                  className="pt-8 pb-2 px-0"
                />
                <div className="flex justify-between  text-sm md:mb-20">
                  <span className="text-upworkgreen-bar">Title</span>
                  <span className="text-upworkgreen-bar">Skills</span>
                  <span>Scope</span>
                  <span>Budget</span>
                </div>
              </span>
              <span className="text-4xl font-semibold  ">
                What skills does your work require
              </span>
            </div>
            <div className="px-4 md:px-8 col-span-4 pt-4 md:pt-36">
              <div className="font-semibold text-lg">
                Search skills or add your own
              </div>
              <div className="mt-2 flex  items-center space-x-2 ">
                {/* <BsSearch size={30} className="py-1 px-2" /> */}
                <FieldArray
                  className="outline-none w-full h-9"
                  name="skill_required_for_job"
                >
                  {(fieldArrayProps) => {
                    console.log("Field Array Props", fieldArrayProps);
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { skill_required_for_job } = values;
                    return (
                      <div>
                        {skill_required_for_job.map((name, index) => {
                          return (
                            <div
                              className="flex  items-center space-x-1 border-b-2 border-green-300"
                              key={index}
                            >
                              {/* border border-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 */}
                              <div className="flex md:w-72">
                                {" "}
                                <Field
                                  className="m-1 focus:outline-none my-2 w-full"
                                  name={`skill_required_for_job[${index}].name`}
                                />
                              </div>
                              <div className="space-x-3">
                                {" "}
                                {index === 0 && (
                                  <button
                                    type="button"
                                    className=" mx:2 px-0.5 md:px-2 "
                                    onClick={() => {
                                      push("");
                                    }}
                                  >
                                    <IoIosAdd className="rounded-full bg-gray-500 text-white" />
                                  </button>
                                )}{" "}
                                {index > 0 && (
                                  <button
                                    type="button"
                                    className=" mx:2 px-1 md:px-2"
                                    onClick={() => {
                                      remove(index);
                                    }}
                                  >
                                    <AiOutlineMinus className="rounded-full text-white bg-gray-500" />
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              <ErrorMessage name="skill_required_for_job" />
              <AnimatePresence>
                <Disclosurecomponent />
              </AnimatePresence>
            </div>
          </span>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            scope: Yup.string().required("Please Fill the duration"),
          })}
        >
          <span className="grid grid-cols-8">
            <div className="pb-40 col-span-4 bg-upworkgreen-form text-white rounded px-4 md:px-8">
              <span className="">
                <Line
                  percent="75"
                  strokeWidth="2"
                  trailWidth="2"
                  trailColor="#2B5468"
                  strokeColor="#95DE01"
                  strokeLinecap="round"
                  className="pt-8 pb-2 px-0"
                />
                <div className="flex justify-between  text-sm md:mb-20">
                  <span className="text-upworkgreen-bar">Title</span>
                  <span className="text-upworkgreen-bar">Skills</span>
                  <span className="text-upworkgreen-bar">Scope</span>
                  <span>Budget</span>
                </div>
              </span>
              <span className="text-4xl font-semibold  ">
                Next, estimate the scope of your work.
              </span>
              <div className="py-4 text-md">
                These aren’t final answers, but this information helps us
                recommend the right talent for what you need.
              </div>
            </div>
            <div className="col-span-4 px-4 md:px-8 py-4 md:py-36">
              <div className="font-semibold">
                What level of experience will it need?
              </div>
              <div className="font-thin text-gray-700 py-2">
                This will not restrict any proposals, but helps match expertise
                to your budget.
              </div>
              <div className="flex hover:bg-gray-100 items-start gap-x-2 py-2">
                <Field
                  type="radio"
                  value="beginner"
                  className="border mt-1.5"
                  name="scope"
                />
                <div>
                  <div className="font-semibold">Entry</div>
                  <div className="text-sm text-gray-600">
                    {" "}
                    Looking for someone relatively new to this field
                  </div>
                </div>
              </div>
              <div className="flex hover:bg-gray-100 items-start gap-x-2 py-2">
                <Field
                  type="radio"
                  value="intermediate"
                  className="border mt-1.5"
                  name="scope"
                />
                <div>
                  <div className="font-semibold">Intermediate</div>
                  <div className="text-sm text-gray-600">
                    {" "}
                    Looking for substantial experience in this field
                  </div>
                </div>
              </div>
              <div className="flex hover:bg-gray-100 items-start gap-x-2 py-2">
                <Field
                  type="radio"
                  value="Expert"
                  className="border mt-1.5"
                  name="scope"
                />
                <div>
                  <div className="font-semibold">Expert</div>
                  <div className="text-sm text-gray-600">
                    {" "}
                    Looking for comprehensive and deep expertise in this field
                  </div>
                </div>
              </div>

              <ErrorMessage name="scope" />
            </div>
          </span>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            total_pay: Yup.string().required(),
            if_hourly_then_pay_one: Yup.string().when("total_pay", {
              is: "hourly",
              then: Yup.string().required(
                "you selected hourly so put hourly rate"
              ),
            }),
            if_hourly_then_pay_two: Yup.string().when("total_pay", {
              is: "hourly",
              then: Yup.string().required(
                "you selected hourly so put hourly rate"
              ),
            }),
            if_total_then_pay: Yup.string().when("total_pay", {
              is: "Fixed-price",
              then: Yup.string().required(
                "You selected total mode so input total"
              ),
            }),
          })}
        >
          <span className="grid grid-cols-8">
            <div className="pb-40 col-span-4 bg-upworkgreen-form text-white rounded px-4 md:px-8">
              <span className="">
                <Line
                  percent="100"
                  strokeWidth="2"
                  trailWidth="2"
                  trailColor="#2B5468"
                  strokeColor="#95DE01"
                  strokeLinecap="round"
                  className="pt-8 pb-2 px-0"
                />
                <div className="flex justify-between  text-sm md:mb-20">
                  <span className="text-upworkgreen-bar">Title</span>
                  <span className="text-upworkgreen-bar">Skills</span>
                  <span className="text-upworkgreen-bar">Scope</span>
                  <span className="text-upworkgreen-bar">Budget</span>
                </div>
              </span>
              <span className="text-4xl font-semibold  ">
                Tell us about your budget.
              </span>
              <div className="py-4 text-md">
                This will help us match you to talent within your range.
              </div>
            </div>
            <div className="col-span-4 px-4 md:px-8 py-4 md:py-36">
              <div className="flex justify-between items-center gap-x-4">
                <span className="w-full">
                  <div className="hover:bg-gray-50 rounded-lg p-4  border border-gray-200 hover:border-green-600 relative">
                    {" "}
                    <Field
                      onClick={() => {
                        set_radio_value("hourly");
                        console.log("horuly clicked");
                      }}
                      className="md:absolute top-2 right-3"
                      name="total_pay"
                      type="radio"
                      value="hourly"
                    />
                    <div className="flex justify-center md:py-2">
                      {" "}
                      <MdAvTimer size={25} />
                    </div>
                    <div className="font-semibold flex justify-center">
                      Hourly rate
                    </div>
                  </div>{" "}
                  <ErrorMessage name="total_pay" />
                </span>{" "}
                <span className="w-full flex ">
                  <div className="hover:bg-gray-50 rounded-lg md:p-4  border border-gray-200 hover:border-green-600 relative">
                    <Field
                      onClick={(values) => {
                        set_radio_value("total");
                        console.log("total clicked");
                      }}
                      className="md:absolute top-2 right-3"
                      name="total_pay"
                      type="radio"
                      value="Fixed-price"
                    />{" "}
                    <div className="flex justify-center md:py-2">
                      <IoPricetagSharp size={25} />{" "}
                    </div>
                    <div className="font-semibold flex justify-center">
                      Project Budget
                    </div>
                    <ErrorMessage name="total_pay" />
                  </div>
                </span>
              </div>
              <div className="pt-8 overflow-hidden">
                {radio_value === "hourly" ? (
                  <span className="">
                    <div className="py-2">Set hourly Rate</div>
                    <div className="flex items-center gap-x-2 md:gap-x-10 flex-wrap">
                      <div>
                        <div>From</div>
                        <div className="flex items-center gap-x-1">
                          <span className="flex items-center border hover:border-green-500">
                            {" "}
                            <BiDollar />
                            <Field
                              rows={1}
                              as="textarea"
                              cols={10}
                              type="text"
                              className=" outline-none resize-none "
                              name="if_hourly_then_pay_one"
                            />
                          </span>{" "}
                          <div className="text-gray-600">/hour</div>
                        </div>
                      </div>{" "}
                      <div className=" ">
                        <div>To</div>
                        <div className="flex items-center gap-x-1">
                          <span className=" flex items-center border hover:border-green-500 ">
                            <BiDollar />
                            <Field
                              rows={1}
                              as="textarea"
                              cols={10}
                              type="text"
                              className=" outline-none resize-none "
                              name="if_hourly_then_pay_two"
                            />
                          </span>
                          <div className="text-gray-600">/hour</div>
                        </div>
                      </div>
                    </div>
                    <div className="py-2 text-red-500 text-sm tracking-tighter">
                      {radio_value === "hourly" && (
                        <ErrorMessage name="if_hourly_then_pay_one" />
                      )}
                    </div>
                  </span>
                ) : (
                  <span>
                    <div className="font-sans tracking-tighter pb-2 ">
                      Maximum project budget (USD)
                    </div>

                    <div className=" border hover:border-green-600 flex items-center md:w-52  h-10">
                      {" "}
                      <BiDollar className="md:p-1" size={25} />
                      <Field
                        className="border-none outline-none"
                        name="if_total_then_pay"
                      />
                    </div>

                    <div className="text-red-500 py-2 text-sm">
                      {radio_value === "total" && (
                        <ErrorMessage name="if_total_then_pay" />
                      )}
                    </div>
                    <div className="text-gray-400 text-sm py-2">
                      You will have the option to create milestones which divide
                      your project into manageable phases.
                    </div>
                  </span>
                )}
              </div>
            </div>
          </span>
        </WizardStep>
      </Wizard>
    </div>
  );
};

export default WizardApp;
