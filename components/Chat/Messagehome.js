import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useSWR from "swr";
import jwt_decode from "jwt-decode";
import router from "next/router";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Messagehome() {
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
    <div className="space-y-5">
      {isLoading && <div>Data is Loading</div>}
      {data &&
        data.map((data) => {
          return (
            <div className="border p-5 shadow-inner" key={data.room_name}>
              <div>
                room_name:{data.room_name}
                <button
                  className="px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                  onClick={() => {
                    pushtoindvidualchat(data.user_id_1, data.user_id_2);
                  }}
                >
                  Message
                </button>
              </div>
              <div>user_id_1:{data.user_id_1}</div>
              <div>user_id_2:{data.user_id_2}</div>
            </div>
          );
        })}
      {/* chat page
      <button onClick={fetchrooms}>fetch</button> */}
    </div>
  );
}

export default Messagehome;
