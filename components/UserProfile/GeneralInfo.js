import React from "react";
import Image from "next/dist/client/image";
import Isac from "../../public/static/isaac.jpg";
import { MdLocationOn } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
function GeneralInfo() {
  return (
    <div className="flex items-start  justify-between border-b   px-4 py-8">
      <span className="flex items-center">
        <div className="relative  pl-4 pr-8">
          <Image className="rounded-full  " src={Isac} height={80} width={80} />
          <button>
            <MdModeEdit
              className="bg-white rounded-full text-gray-600 border border-gray-300 px-0.5 absolute top-1 left-2"
              size={25}
            />
          </button>
        </div>
        <div>
          <div className="text-2xl font-semibold">Surendhar P.</div>
          <div className="flex items-center text-gray-500 font-serif">
            <MdLocationOn />
            <div> Chennai, India – 5:30 pm local time</div>
          </div>
        </div>
      </span>
      <span className="flex items-center gap-x-4">
        {" "}
        <div>
          <button className="px-4 rounded-full border py-1.5 font-semibold text-green-600 hover:bg-gray-50">
            See Public View
          </button>
        </div>
        <div>
          <button className="px-4 py-1.5 rounded-full bg-upworkgreen-button text-white font-semibold hover:bg-upworkgreen-dark">
            Profile Settings
          </button>
        </div>
      </span>
    </div>
  );
}

export default GeneralInfo;
