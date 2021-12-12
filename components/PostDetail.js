import PostDate from "./PostComponents/PostDate";
import { IoLocationSharp } from "react-icons/io5";
import ModalPostPriceInfo from "./PostComponents/ModalPostPriceInfo";

function PostDetail({ post }) {
  return (
    <div className="px-5  ">
      <span>
        <div>
          <div className="text-xl font-semibold pt-2 pb-6">{post.title}</div>
          <hr />
          <div className="text-green-600 font-semibold hover:underline hover:text-green-800">
            {post.category}
          </div>

          <div className="text-sm text-gray-500">
            {" "}
            <PostDate date={post.date_created} />
          </div>
          <div className="text-gray-600 py-3 flex items-center gap-x-1">
            {" "}
            <IoLocationSharp className="text-blue-700 " />
            <div> Wordwide</div>
          </div>
        </div>
        <hr />
        <div className="py-5">{post.description}</div>
        <hr />
        <div>
          <ModalPostPriceInfo post={post} />
        </div>
        <hr />
        <span className="flex gap-x-1 py-5">
          <div className="font-semibold">Project Type:</div>
          <div>Ongoing Project</div>
        </span>
        <hr />
        <span className="">
          <div className="font-semibold text-xl pt-5 pb-5">
            {" "}
            Skills and Expertise
          </div>
          <div className="  flex flex-wrap pb-5">
            {post.skill.map((skill) => {
              return (
                <div className="" key={skill.id}>
                  <div className="bg-gray-100 text-gray-700 hover:bg-gray-300 rounded-full  px-2 mr-2 my-1">
                    {skill.name}
                  </div>
                </div>
              );
            })}
          </div>
        </span>
        <hr />

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
      </span>
    </div>
  );
}

export default PostDetail;
