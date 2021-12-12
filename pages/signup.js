import { useContext, useState } from "react";
import GoogleIcon from "../public/google-icon.png";
import Image from "next/image";

import Layout from "../components/Layout";
import dynamic from "next/dynamic";

import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

const GoogleLogin = dynamic(() => import("react-google-login"), { ssr: false });

function Signup() {
  const [error, seterror] = useState({ iserror: false, data: "" });
  const Router = useRouter();
  const { dispatch } = useContext(AuthContext);
  const responseGoogle = async (response) => {
    console.log("from signup printing response", response);
    const { accessToken } = response;
    if (accessToken) {
      try {
        const fetched_data = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/auth/google/",
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              access_token: accessToken,
            }),
          }
        );
        const json_data = await fetched_data.json();
        console.log(json_data);
        // console.log(json_data.non_field_errors[0]);
        if (
          json_data.non_field_errors ==
          "User is already registered with this e-mail address."
        ) {
          seterror({
            iserror: true,
            data: "User is already registered with this e-mail address.",
          });

          Router.push("/signup");
        } else {
          dispatch({
            type: "login_success",
            payload: { json_data },
          });
          Router.replace("/post");
        }
      } catch (err) {
        console.log("login fail error from google", err);
        // dispatch({
        //   type: "login_fail",
        // });
      }
    } else {
      console.log("no access token found ");
    }
  };
  const Continuewithgoogle = async (e) => {
    try {
      const fetched_data = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          "/auth/o/google-oauth2/?redirect_uri=http://localhost:3000/google"
      );
      const json_data = await fetched_data.json();

      console.log(json_data.authorization_url);
      window.location.replace(json_data.authorization_url);
    } catch (err) {
      console.log("from error in loginemail.js", err);
    }
  };
  return (
    <Layout>
      <div className="flex justify-center py-40 text-center">
        <div className="px-20  pt-10 pb-20 border">
          <div className="font-semibold text-3xl my-1">
            Get your free account
          </div>
          {error.iserror ? error.data : ""}
          <div className="mt-4  flex w-full items-center gap-3  text-white bg-blue-500 rounded-full hover:bg-blue-600 ">
            <Image
              className="rounded-full overflow-hidden"
              src={GoogleIcon}
              height={30}
              width={30}
            />

            <div className="md:px-20">
              <GoogleLogin
                render={(renderProps) => (
                  <button
                    className=""
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Continue with google
                  </button>
                )}
                className=""
                clientId="915969950645-1a5ual76bqknd89kgm6uvdtrr1vfs01e.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
          <div className="my-2 text-gray-500">or</div>
          <div className="flex border hover:border-green-500 focus:border-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 m-1 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>

            <input
              className="ml-2 boder-none focus:outline-none w-full"
              placeholder=" Work email address"
              name="email"
              type="email"
            />
          </div>
          <button
            type="submit"
            className="mt-8 block text-white p-1 md:px-32 w-full bg-green-500 rounded-full hover:bg-green-600"
          >
            Continue with Email
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
