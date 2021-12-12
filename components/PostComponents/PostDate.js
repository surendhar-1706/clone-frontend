import React from "react";
import Moment from "react-moment";
import moment from "moment";
function PostDate({ date }) {
  const new_date = moment(date);
  return (
    <div>
      <div className="flex items-center gap-1">
        <div>Posted</div>
        <Moment fromNow ago>
          {new_date}
        </Moment>
        <div className="">ago</div>
      </div>
    </div>
  );
}

export default PostDate;
