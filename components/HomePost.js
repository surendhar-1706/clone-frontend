import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { BiLoaderAlt } from "react-icons/bi";
import ShowMoreText from "react-show-more-text";
import Modal from "react-modal";
import { useRouter } from "next/router";
import PostDetailFetch from "./PostDetailFetch";
import PostDate from "./PostComponents/PostDate";
import { BiDislike } from "react-icons/bi";
import { VscHeart } from "react-icons/vsc";
import { RiHeartFill } from "react-icons/ri";
import { motion } from "framer-motion";
import useSWR from "swr";
import ThirdModal from "./Modal/ThirdModal";
import { AnimatePresence } from "framer-motion";
import { ModalContext_Create } from "../context/ModalContext";
const fetcher = (url) => fetch(url).then((r) => r.json());
// Modal.setAppElement("#__next");

function HomePost({ post }) {
  const { GlobalModalState, dispatch } = useContext(ModalContext_Create);
  const router = useRouter();
  const [buttonloading, setbuttonloading] = useState(true);
  const [nextpage, setnextpage] = useState(post.next);
  const [postlist, setpostlist] = useState(post.results);
  const [pstid, setpstid] = useState();
  const [modalstate, setmodalstate] = useState(false);
  const [liked, setliked] = useState(false);

  // console.log("printing post fetched data", postlist);
  useEffect(() => {
    console.log(
      "printing modal state from homepost expected->false",
      modalstate
    );
  }, [modalstate]);
  return (
    <div className=" pt-10  ">
      <p className="font-bold px-10 text-xl">My Feed</p>
      <hr className="mt-7 px-10"></hr>
      <div className="py-3 px-10">My saved category</div>
      <hr></hr>

      {postlist.map((data) => {
        return (
          <div className="py-2 group hover:bg-gray-50" key={data.id}>
            <div className="px-10 mt-2 mb-6 flex justify-between  flex-wrap items-center">
              <div className="   group-hover:text-green-600  hover:underline  font-semibold text-lg">
                <Link
                  scroll={false}
                  href={`?postid=${data.id}`}
                  as={`/post/${data.id}`}
                >
                  <a
                    onClick={async () => {
                      setpstid(data.id);
                      console.log(
                        modalstate,
                        "printing modalstate from title click button expected -> true"
                      );
                      setmodalstate(true);
                      console.log(
                        "printing modalcontext_create",
                        GlobalModalState
                      );
                      console.log(
                        "going to trigger dispatch------------------------------"
                      );
                      dispatch({
                        type: "setopen",
                      });
                      console.log(
                        !router.query.id,
                        "router query id expected->true"
                      );
                    }}
                  >
                    {data.title}
                  </a>
                </Link>
              </div>
              <div className="flex items-center gap-x-2">
                <BiDislike className="bg-white p-2 border border-gray-400 rounded-full h-9 w-9" />
                {liked ? (
                  <RiHeartFill
                    onClick={() => {
                      setliked(false);
                    }}
                    className="text-gray-500 bg-white p-2 border border-gray-400 rounded-full h-9 w-9"
                  />
                ) : (
                  <VscHeart
                    onClick={() => {
                      setliked(true);
                    }}
                    className="bg-white p-2 border border-gray-400 rounded-full h-9 w-9"
                  />
                )}
              </div>
            </div>
            <div className="pl-10 text-gray-500  flex flex-wrap items-center text-xs gap-1">
              <div className="font-semibold text-gray-700">
                {data.pay_type}-
              </div>
              <div className="font-semibold text-gray-700">
                {data.from_price && <div> ${data.from_price}-</div>}
              </div>
              <div className="font-semibold text-gray-700">
                {data.to_price && <div> ${data.to_price}</div>}
              </div>
              <div>{data.fixed_price && <div> ${data.fixed_price}-</div>}</div>
              <div>{data.freelancer_type}-</div>
              <div>{data.total_length},</div>
              <div>{data.weekly_length}</div>
              <div>
                <PostDate date={data.date_created} />
              </div>
            </div>

            <div className="px-10 ">
              <ShowMoreText
                lines={2}
                more=" more "
                less="less "
                className="text-gray-900"
                anchorClass="text-green-600"
                expanded={false}
              >
                <div> {data.description}</div>
              </ShowMoreText>
            </div>
            <div className=" px-10">{data.category}</div>
            <div className=" px-10 flex flex-wrap">
              {data.skill.map((skill) => {
                return (
                  <div className="" key={skill.id}>
                    <div className="bg-gray-100 text-gray-700 hover:bg-gray-300 rounded-full  px-2 mr-2 my-1">
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
            <hr></hr>
          </div>
        );
      })}
      <div className="px-10 py-2">
        <button
          onClick={async () => {
            setbuttonloading(false);
            if (nextpage) {
              // const { data, error } = useSWR(nextpage, fetcher);
              // console.log(nextpage, "daata", data);
              const fetched_data = await fetch(nextpage);
              const json_data = await fetched_data.json();
              setpostlist([...postlist, ...json_data.results]);
              setnextpage(json_data.next);
            } else {
              console.log("no next page found pring next page", nextpage);
            }
            setbuttonloading(true);
          }}
          className=" rounded-full pl-4 pr-4 py-1  text-sm  font-bold border text-green-500 border-gray-500 hover:bg-gray-50"
        >
          {buttonloading ? (
            <span className="">Load more Jobs</span>
          ) : (
            <div className="flex items-center ">
              <div className="pr-3">
                {" "}
                <BiLoaderAlt className="animate-spin" />
              </div>

              <span>Load more Jobs</span>
            </div>
          )}
        </button>
      </div>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          console.log("onexit complete triggered -------------------------");
          // setmodalstate(false);
        }}
      >
        {modalstate && !router.query.id && (
          <ThirdModal setmodalstate={setmodalstate} modalstate={modalstate}>
            <PostDetailFetch id={pstid} />
          </ThirdModal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomePost;
