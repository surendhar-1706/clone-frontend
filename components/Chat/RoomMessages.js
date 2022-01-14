import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useQuery, useQueryClient } from "react-query";
import { w3cwebsocket } from "websocket";
import { Formik } from "formik";
import { useRouter } from "next/router";
import Avatar from "react-avatar";
import { IoSend } from "react-icons/io5";
function RoomMessages({ room_name }) {
  const [token, set_token] = useState();
  const [tokenexsists, set_tokenexsists] = useState(false);
  const [userid, setuserid] = useState();
  const router = useRouter();
  const [start_client, set_start_client] = useState(false);
  const [messages, setmessages] = useState([]);
  const [previous_room, set_previous_room] = useState();
  const [current_room, set_current_room] = useState();
  const queryClient = useQueryClient();
  var client = start_client
    ? new w3cwebsocket(
        "ws://" + "127.0.0.1:8000" + "/ws/chat/" + room_name + "/"
      )
    : null;
  // console.log(client, "priting client from roomessages");
  const fetch_messages = async () => {
    const res = await fetch(
      "http://127.0.0.1:8000" + "/chat/api/last_ten/" + room_name + "/",
      {
        method: "get",
        headers: {
          Authorization: "JWT " + token,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const json_data = await res.json();

    const results = json_data.results.reverse();
    return results;
  };
  const { isLoading, error, data } = useQuery(
    "room_messages_" + room_name,
    fetch_messages,
    {
      enabled: tokenexsists,
    }
  );

  useEffect(() => {
    var local_token = localStorage.getItem("access_token");
    set_token(local_token);
    set_tokenexsists(true);
    set_start_client(true);
    set_current_room(room_name);
    set_previous_room(room_name);
    if (start_client) {
      console.log("printing cline", client.onopen);
      client.onopen = () => {
        console.log("WebSocket Client Connected");
      };
      client.onmessage = async (chat_message) => {
        const dataFromServer = JSON.parse(chat_message.data);
        console.log("got reply! ", dataFromServer);

        if (dataFromServer) {
          setmessages((messages) => [...messages, dataFromServer.message]);
          var full_name = "room_messages_" + room_name;
          // await queryClient.refetchQueries([full_name], { active: true });
        }
      };
    }
  }, [room_name]);
  return (
    <div>
      {isLoading && <div>Loading</div>}
      RoomMessages
      {room_name}
      <div>
        {data &&
          data.map((message) => {
            return (
              <div className="flex items-center " key={message.id}>
                <Avatar
                  color={Avatar.getRandomColor("sitebase", [
                    "red",
                    "green",
                    "blue",
                  ])}
                  name={message.name}
                  size="40"
                  round={true}
                />
                <div className="">[{message.name}] </div>
                <div>{message.content}</div>
              </div>
            );
          })}
        {messages &&
          messages.map((message) => {
            return <div key={message.id}>{message}</div>;
          })}
      </div>
      <div>
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
              <div className="flex items-center border">
                <textarea
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.message}
                  name="message"
                  className="outline-none w-full resize-none rounded-md h-10 py-0.5"
                  // cols={100}
                  rows={1}
                />
                {props.errors.message && (
                  <div id="feedback">{props.errors.message}</div>
                )}
                <button
                  className=" px-2 py-2 bg-gray-50 text-upworkgreen-light rounded-full"
                  type="submit"
                >
                  <IoSend size={30} />
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default RoomMessages;
