import React from "react";
import AboutProfile from "./AboutProfile";
import EarningProfile from "./EarningProfile";
import GeneralInfo from "./GeneralInfo";
import WorkHistory from "./WorkHistory";

function BaseProfile() {
  return (
    <div className="bg-gray-100 p-5 md:px-36 h-screen ">
      <div className="bg-white border rounded-md ">
        <GeneralInfo />
        <div className="grid grid-cols-12">
          <div className="col-span-4 ">
            <EarningProfile />
          </div>{" "}
          <div className="col-span-8 ">
            <AboutProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseProfile;
