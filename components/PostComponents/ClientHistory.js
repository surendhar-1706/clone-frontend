import React from "react";

function ClientHistory() {
  return (
    <div className="pl-5">
      <span className="">
        {" "}
        <div className="font-semibold pb-6 pt-3">Activity on this job</div>
        <span className="space-y-2  text-gray-600">
          {" "}
          <div>Proposals:</div>
          <div>Last viewed by client: </div>
          <div>Interviewing: </div>
          <div> Invites sent:</div>
          <div>Unanswered invites:</div>
        </span>
      </span>
    </div>
  );
}

export default ClientHistory;
