import React from "react";
import Layouttwo from "../../../components/Layout/Layouttwo";
import Head from "next/head";
import ListUsers from "../../../components/Chat/ListUsers";
import ListMessages from "../../../components/Chat/ListMessages";
import ListIdMessage from "../../../components/Chat/ListIdMessage";

function testchild() {
  return (
    <Layouttwo>
      <Head>
        {" "}
        <title>Messages</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid grid-cols-12">
        <div className="col-span-3 px-5 py-5">
          {" "}
          <ListUsers />
        </div>
        <div className="col-span-9 ">
          <ListIdMessage />
        </div>

        {/* <div className="col-span-1 ">hi</div>
        <div className="col-span-1 ">hi</div> */}
      </div>
    </Layouttwo>
  );
}

export default testchild;
