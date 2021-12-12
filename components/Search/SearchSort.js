import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
function SearchSort() {
  const sortoptions = [
    {
      key: "date_created",
      value: "date_created",
    },
    {
      key: "-date_created",
      value: "-date_created",
    },
  ];
  const router = useRouter();

  return (
    <div className="space-y-3 font-semibold">
      <Formik
        initialValues={{ ordering: "-date.created" }}
        onSubmit={(values, actions) => {
          console.log("searchsort submitted");
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex items-center">
              <div>
                <label>Asce</label>
                <input
                  type="radio"
                  className="w-full  pl-5 resize-none  rounded-sm p-1 outline-none focus:border-green-600 border border-gray-300 "
                  onChange={async (e) => {
                    const wow = await props.handleChange(e);
                    console.log(
                      "values changed from searchsort checkbox",
                      props.values.ordering
                    );
                    const wow2 = await router.push(
                      `/post/search/?title=${router.query.title}&ordering=${props.values.ordering}`,
                      { shallow: true }
                    );
                  }}
                  onBlur={props.handleBlur}
                  value="-date_created"
                  name="ordering"
                  placeholder="Search for jobs"
                />
                <label>Desc</label>
                <input
                  type="radio"
                  className="w-full  pl-5 resize-none  rounded-sm p-1 outline-none focus:border-green-600 border border-gray-300 "
                  onChange={async (e) => {
                    const wow = await props.handleChange(e);
                    console.log(
                      "values changed from searchsort checkbox",
                      props.values.ordering
                    );
                    const wow2 = await router.push(
                      `/post/search/?title=${router.query.title}&ordering=${props.values.ordering}`,
                      { shallow: true }
                    );
                  }}
                  onBlur={props.handleBlur}
                  value="date_created"
                  name="ordering"
                  placeholder="Search for jobs"
                />
              </div>
            </div>

            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SearchSort;
