import React from "react";
import Messagehome from "../../components/Chat/Messagehome";
import Layouttwo from "../../components/Layout/Layouttwo";

function messagepage() {
  return (
    <Layouttwo>
      {/* <div className="relative flex justify-center opacity-50  bg-gradient-to-r from-green-600 to-cyan-600 filter blur-xl">
        <Messagehome className="" />
      </div> */}
      <div className=" p-5 min-h-screen ">
        <Messagehome />
      </div>
    </Layouttwo>
  );
}

export default messagepage;
