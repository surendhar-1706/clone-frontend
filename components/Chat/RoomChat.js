import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { HiAnnotation } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import RoomMessages from "./RoomMessages";
function RoomChat({ data }) {
  const [room_name, set_room_name] = useState();
  return (
    <div className="grid grid-cols-12">
      <div className=" border space-y-5 min-h-full col-span-3">
        <div className="flex space-x-8 items-center justify-center py-4 bg-gray-50 border border-b">
          <div className="border rounded-full p-1">
            {" "}
            <IoIosSettings size={20} className="text-gray-600" />
          </div>
          <div className="flex items-center space-x-2 border rounded-lg">
            <div className="px-2 py-1 bg-upworkgreen-light text-white">
              <HiAnnotation className=" " size={20} />
            </div>
            <div className="pl-2 pr-2 py-1">
              <TiContacts size={20} />
            </div>
          </div>
          <div className="border rounded-full text-gray-600 p-0.5">
            <AiOutlinePlus size={20} />
          </div>
        </div>
        <div className="my-2 mx-4 border flex items-center gap-2 py-2 hover:border-upworkgreen-light">
          <div className="px-2">
            <BsSearch />
          </div>
          <div>
            <input
              className="outline-none border-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="my-2 mx-4 px-4 py-2 border rounded-md bg-gray-50 flex items-center justify-between">
          <div>All Recent</div>

          <AiFillCaretDown />
        </div>

        <div className="">
          {data &&
            data.map((data) => {
              return (
                <div
                  className="px-4 py-4 flex items-center group gap-3 border-b-2"
                  key={data.room_name}
                >
                  <div className="bg-gray-200 p-3 rounded-full text-gray-600">
                    <FaUserTie />
                  </div>
                  <div>
                    {" "}
                    <div className="group-hover:text-upworkgreen-light">
                      {data.room_name}
                    </div>
                    <button
                      onClick={(e) => {
                        set_room_name(data.room_name);
                      }}
                    >
                      Message
                    </button>
                  </div>

                  <hr />
                </div>
              );
            })}
        </div>
      </div>
      <div className="col-span-9">
        {room_name && <RoomMessages room_name={room_name} />}
      </div>
    </div>
  );
}
export default RoomChat;
