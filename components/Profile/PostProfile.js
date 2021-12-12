import React, { useContext } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { Line } from "rc-progress";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import Isac from "../../public/static/isaac.jpg";
import Image from "next/image";
import Link from "next/link";
import { ModalContext_Create } from "../../context/ModalContext";
import { AnimatePresence, motion } from "framer-motion";
function PostProfile() {
  const { GlobalModalState } = useContext(ModalContext_Create);
  // console.log(GlobalModalState, "PostProfile.js");
  const wow = require("../../public/static/isaac.jpg");
  return (
    <div className="px-2">
      <div className="flex items-start gap-x-1">
        {/* <span className=" p-1 ">
          <AnimatePresence>
            {GlobalModalState.isOpen ? (
              ""
            ) : (
              <motion.div exit={{ opacity: 0 }}>
                <Image src={wow} height={30} width={30} />
              </motion.div>
            )}
          </AnimatePresence>
        </span> */}
        <span className="font-semibold">My Profile</span>
      </div>
      <Link href="/profile">
        <a>
          <div className="flex items-center gap-x-1 pt-2">
            <IoEyeSharp className="text-upworkgreen-light" />
            <span className="text-upworkgreen-light hover:underline hover:text-upworkgreen-dark">
              View Profile
            </span>
          </div>
        </a>
      </Link>
      <div className="pt-2 pb-4">
        <span className="font-semibold ">Visibiltiy</span>
        <span className="flex items-center pt-4 gap-x-1">
          <div className="flex items-start gap-x-2">
            <TiContacts size={22} className="overflow-hidden "></TiContacts>
            <div className="text-sm font-thin break-words">
              Upwork Users Only
            </div>
          </div>
          <div className="bg-white hover:bg-gray-50 hover:text-gray-600 rounded-full p-2">
            <MdModeEdit />
          </div>
        </span>
      </div>
      <div>
        <span className="font-bold ">Hours</span>
        <div className="flex items-center gap-x-2 pt-4 pb-4">
          <BsClockHistory size={22} />
          <div className="text-sm font-thin break-words ">
            As Needed - Open to Offers
          </div>{" "}
          <div className="bg-white hover:bg-gray-50 hover:text-gray-600 rounded-full p-2">
            <MdModeEdit />
          </div>
        </div>
      </div>
      <div>
        <span>Profile Completion</span>
        <span className="flex items-center py-2  ">
          <Line
            percent="40"
            strokeWidth="4"
            trailWidth="4"
            trailColor="#dbf0a3"
            strokeColor="#95df00"
            strokeLinecap="square"
            className="p-2"
          />
          <div className="text-xxs">40%</div>
        </span>
      </div>
      <div className="text-upworkgreen-light flex items-center gap-x-4 py-1">
        <IoAddCircleSharp size={22} />
        <span className=" break-words font-semibold hover:underline hover:text-upworkgreen-dark ">
          Add Work History
        </span>
      </div>
      <div>
        <span className="font-semibold block py-2">Proposals</span>
        <span className="text-upworkgreen-light hover:underline hover:text-upworkgreen-dark">
          174 available connects
        </span>
      </div>
    </div>
  );
}

export default PostProfile;
