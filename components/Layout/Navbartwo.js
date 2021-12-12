import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import SendIcon from "@material-ui/icons/Send";
import CreateJob from "../Modal/CreateJob";
import { ModalContext_Create } from "../../context/ModalContext";
function Navbartwo() {
  const { dispatch } = useContext(ModalContext_Create);
  const [picdetail, setpicdetail] = useState(false);

  useEffect(() => {
    console.log("navbartwo.js useeffect ran");
    if (picdetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    if (picdetail) {
      dispatch({
        type: "setopen",
      });
    } else {
      dispatch({
        type: "setclose",
      });
    }
  }, [picdetail]);

  return (
    <div className="flex flex-wrap items-center bg-cyan-900 text-white py-4 ">
      <div className="pl-40 pr-10 font-bold text-lg">
        <Link href="/post">Upwork</Link>
      </div>

      <div className="flex flex-wrap items-center border-none focus:outline-none p-2 px-3   rounded-full bg-cyan-800 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 p-1 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          placeholder="Search"
          className="outline-none placeholder-white text-white bg-cyan-800  rounded-full md:px-3 md:pr-20 "
        />
      </div>

      <div className="flex items-center flex-wrap space-x-3 px-16">
        {" "}
        <div className="hover:text-green-400">Find Work</div>
        <div className="hover:text-green-400">My Jobs</div>
        <div className="hover:text-green-400">
          <div className="">Reports</div>
        </div>
        <div className="hover:text-green-400">
          <span>Messages</span>
          <div className=""> {picdetail && <CreateJob />}</div>
        </div>
        <div className="hover:text-green-400"></div>
      </div>
      <div className="flex flex-wrap items-center space-x-3">
        <div className="hover:text-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 flex "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="hover:text-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <div className="hover:text-green-400">
          {" "}
          <SendIcon />
        </div>
        <div className="">
          <button
            onClick={() => {
              setpicdetail(!picdetail);

              console.log("Client clicked");
            }}
            className="hover:text-green-400 "
          >
            Pic
          </button>
        </div>
      </div>

      <hr></hr>
    </div>
  );
}

export default Navbartwo;
