import React, { useContext, useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";
import { Formik } from "formik";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import Layouttwo from "../../components/Layout/Layouttwo";
import { AuthContext } from "../../context/AuthContext";

function ChatHome() {
  const { authstate, dispatch } = useContext(AuthContext);

  // console.log("authstate", authstate.access);
  const other_user_id = "34";
  // const [other_user_id, set_other_user_id] = useState();
  const [messages, setmessages] = useState([]);
  const [data, setdata] = useState();
  const [start_client, set_start_client] = useState(false);
  const [room_name, set_room_name] = useState();

  const client = start_client
    ? new w3cwebsocket(
        "ws://" +
          process.env.NEXT_PUBLIC_CHAT_URL +
          "/ws/chat/" +
          room_name +
          "/"
      )
    : null;

  useEffect(async () => {
    console.log("useEffect ran from chat page");
    const token = localStorage.getItem("access_token");
    var decoded = jwt_decode(token);
    console.log(decoded);
    if (decoded) {
      const my_id = decoded["user_id"];
      const room_name_var = my_id + "_" + other_user_id;
      set_room_name(room_name_var);
      set_start_client(true);
    }
    var my_id = decoded["user_id"];
    var msg_fetch_room_name =
      my_id > other_user_id
        ? "chat_" + other_user_id + "_" + my_id
        : "chat_" + my_id + "_" + other_user_id;
    const fetched_data = await fetch(
      NEXT_PUBLIC_API_URL + "/chat/api/last_ten/" + msg_fetch_room_name + "/",
      {
        headers: {
          Authorization: "JWT " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );

    const json_data = await fetched_data.json();
    const results = json_data.results.reverse();
    setdata(json_data);

    if (start_client) {
      console.log("printing clinet", client.onopen);
      client.onopen = () => {
        console.log("WebSocket Client Connected");
      };
      client.onmessage = async (chat_message) => {
        const dataFromServer = JSON.parse(chat_message.data);
        console.log("got reply! ", dataFromServer);

        if (dataFromServer) {
          setmessages((messages) => [...messages, dataFromServer.message]);
        }
      };
    }
  }, [start_client]);
  return (
    <Layouttwo>
      <div>
        {data &&
          data.results.map((message) => {
            return (
              <div className="flex items-center " key={message.id}>
                <div>{message.name}</div>
                <div>{message.content}</div>
              </div>
            );
          })}
        {messages &&
          messages.map((message) => {
            return <div key={message.id}>{message}</div>;
          })}

        <Formik
          initialValues={{ message: "" }}
          onSubmit={async (values, actions) => {
            console.log(values);
            const wow = await client.send(
              JSON.stringify({
                type: "chat_message",
                message: values.message,
                token: localStorage.getItem("access_token"),
              })
            );
            actions.resetForm({
              values: {
                message: "",
              },
            });
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.message}
                name="message"
              />
              {props.errors.message && (
                <div id="feedback">{props.errors.message}</div>
              )}
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </Layouttwo>
  );
}

export default ChatHome;
