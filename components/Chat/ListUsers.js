import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useSWR from "swr";
import jwt_decode from "jwt-decode";
import router from "next/router";
import { FaUserTie } from "react-icons/fa";
import { HiAnnotation } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/router";
function ListUsers() {
  const router = useRouter();
  const [token, set_token] = useState();
  const [tokenexsists, set_tokenexsists] = useState(false);
  const [userid, setuserid] = useState();
  // const { data, error } = useSWR(
  //   "http://127.0.0.1:8000/api/post/data",
  //   fetcher
  // );http://127.0.0.1:8000/api/chat/api/all_room_names
  const pushtoindvidualchat = async (user_1, user_2) => {
    const token = localStorage.getItem("access_token");
    var decoded = jwt_decode(token);
    console.log("printing from props", user_1);
    console.log("printing from props", user_2);
    // console.log("printing from props", props.two);
    // console.log(decoded.user_id);
    if (decoded.user_id != user_1) {
      console.log("its not the current user");
      router.push("chat/" + user_1);
    }
    if (decoded.user_id != user_2) {
      console.log("its not the current user");
      router.push("chat/" + user_2);
    }
  };
  const fetchrooms = async () => {
    // console.log("from fetchrooms", token);
    const res = await fetch("http://127.0.0.1:8000/chat/api/all_room_names", {
      method: "get",
      headers: {
        Authorization: "JWT " + token,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const json_data = await res.json();
    console.log(json_data);
    return json_data;
  };
  const { isLoading, error, data } = useQuery("chatrooms", fetchrooms, {
    enabled: tokenexsists,
    staleTime: 1000,
  });

  useEffect(() => {
    var local_token = localStorage.getItem("access_token");
    set_token(local_token);
    // console.log(local_token);
    set_tokenexsists(true);
  }, []);
  console.log(data);
  if (error) return <h1>its is an error</h1>;
  return (
    <div className=" border space-y-5 overflow-y-auto ">
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
      {/* <IoSettingsOutline /> */}
      {isLoading && <div>Data is Loading</div>}
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
                <div className="group-hover:text-upworkgreen-light">
                  {" "}
                  {data.room_name}
                </div>
                <button
                  onClick={() => {
                    router.push("/chat/testchat/32", undefined, {
                      shallow: true,
                    });
                  }}
                >
                  Message
                </button>
              </div>
              {/* <div>user_id_1:{data.user_id_1}</div>
              <div>user_id_2:{data.user_id_2}</div> */}

              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default ListUsers;
