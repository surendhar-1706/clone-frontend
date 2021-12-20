import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useSWR from "swr";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Messagehome() {
  const [token, set_token] = useState();
  const [tokenexsists, set_tokenexsists] = useState(false);
  // const { data, error } = useSWR(
  //   "http://127.0.0.1:8000/api/post/data",
  //   fetcher
  // );http://127.0.0.1:8000/api/chat/api/all_room_names
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
    <div>
      {isLoading && <div>Data is Loading</div>}
      {/* {data &&
        data.results.map((data) => {
          return <div key={data.id}>{data.title}</div>;
        })} */}
      chat page
      <button onClick={fetchrooms}>fetch</button>
    </div>
  );
}

export default Messagehome;
