import React, { useEffect, useState } from "react";
import Layouttwo from "../../../components/Layout/Layouttwo";
import Head from "next/head";
import ListUsers from "../../../components/Chat/ListUsers";
import RoomChat from "../../../components/Chat/RoomChat";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
function chattwo() {
  const router = useRouter();
  const [token, set_token] = useState();
  const [tokenexsists, set_tokenexsists] = useState(false);
  const [userid, setuserid] = useState();
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
    return json_data;
  };
  const { isLoading, error, data } = useQuery("chatrooms", fetchrooms, {
    enabled: tokenexsists,
  });

  useEffect(() => {
    var local_token = localStorage.getItem("access_token");
    set_token(local_token);
    // console.log(local_token);
    set_tokenexsists(true);
  }, []);

  return (
    <Layouttwo>
      <Head>
        {" "}
        <title>Messages</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {data && <RoomChat data={data} />}
    </Layouttwo>
  );
}

export default chattwo;
