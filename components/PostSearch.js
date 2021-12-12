import React from "react";
import { Formik } from "formik";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
function PostSearch() {
  const router = useRouter();
  return (
    <div className="">
      <div className="md:grid grid-cols-6">
        {router.pathname === "/post/search" ? (
          <div className="font-semibold text-2xl">Filter by</div>
        ) : (
          <div className="font-semibold text-2xl">Find Work</div>
        )}

        <div className="col-span-4 ">
          {" "}
          <Formik
            initialValues={{ search_field_value: "" }}
            onSubmit={(values, actions) => {
              router.push(
                `/post/search/?title=${values.search_field_value}&ordering=date_created`
              );
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div className="flex items-center">
                  <input
                    type="textarea"
                    className="w-full h-10 pl-5 resize-none  rounded-sm p-1 outline-none focus:border-green-600 border border-gray-300 "
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.search_field_value}
                    name="search_field_value"
                    placeholder="Search for jobs"
                  />
                  <button type="submit">
                    {" "}
                    <BiSearch className="bg-green-600 text-white h-10 w-9 px-1.5" />
                  </button>
                </div>

                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
              </form>
            )}
          </Formik>
          <div className="text-md p-1 pt-2 font-semibold hover:underline text-green-600">
            Advanced Search
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSearch;
