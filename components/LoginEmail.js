import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "../public/google-icon.png";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import { AnimatePresence } from "framer-motion";
import CustomError from "./Notifications/CustomError";
function Login_Email({ setshowcomponent, setuserdata, userdata }) {
  // const { authstate, dispatch } = useContext(AuthContext);
  const [formdata, setformdata] = useState({ email: "", password: "" });
  // const [error, seterror] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("handle submit clicked");
    console.log(formdata.email);
    setuserdata({ ...userdata, email: formdata.email });
    setshowcomponent(false);
  };
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flex justify-center pt-40  pb-20">
        <div className=" border rounded px-20  pt-10 pb-20 ">
          <div className="text-center font-semibold text-2xl mb-4">
            Login to Upwork
          </div>
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
              className="ml-2 border-none focus:outline-none w-full"
              placeholder="Username or Email"
              name="email"
              type="email"
              value={formdata.email}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={handlesubmit}
            className="mt-8 block text-white md:px-16 p-1 w-full bg-green-500 rounded-full hover:bg-green-600"
          >
            Continue with Email
          </button>
          <p className="text-center p-2">or</p>
          <div>
            <button
              // onClick={Continuewithgoogle}
              className="mt-2 flex items-center  gap-3 w-full text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              <Image
                className="rounded-full overflow-hidden  "
                src={GoogleIcon}
                height={30}
                width={30}
              />
              <span className="md:pl-4 p-1">Continue with Google</span>
            </button>
          </div>
          <hr className="my-8"></hr>
          <div className="mt-8 text-center">
            <button className="rounded-full border  border-green-500 hover:bg-green-50  px-16 py-1">
              <Link href="/signup">Signup</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_Email;
