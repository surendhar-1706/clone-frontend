import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Isac from "../../public/static/isaac.jpg";
function CreateJob() {
  return (
    <div className="fixed bg-transparent p-1 pt-2">
      <div className=" bg-white   text-gray-900   border rounded-sm shadow-lg  m-2  ">
        <div className="flex flex-wrap flex-between pt-4 px-5 w-full">
          <button className="border px-12 py-1 rounded hover:bg-upworkgreen-light hover:text-white font-semibold">
            Online
          </button>
          <button className="border py-1 px-12 rounded hover:bg-upworkgreen-light hover:text-white font-semibold">
            Invisible
          </button>
        </div>

        <div className="hover:bg-gray-200 flex items-center gap-x-2 mt-3 px-5 ">
          <div className="">
            <Image className="rounded-full" src={Isac} width={25} height={25} />
          </div>
          <Link href="/profile">
            <a>
              <div>
                <span className="block ">Surendhar Palanisamy</span>
                <span className="text-xs">Freelancer</span>
              </div>
            </a>
          </Link>
        </div>
        <div className="hover:bg-gray-200 flex items-center   gap-x-2 px-5 mb-4">
          <div className="">
            <Image className="rounded-full" src={Isac} width={25} height={25} />
          </div>
          <div>
            {" "}
            <Link href="/post/create">
              <a>
                <span className="block">Surendhar Palanisamy</span>
                <span>
                  <div className="text-gray-900 text-xs">Client</div>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateJob;
