import React from "react";
import useSWR from "swr";
import { BiHeart } from "react-icons/bi";
import { RiFlag2Fill } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import StarRatings from "react-star-ratings";
import { useRouter } from "next/router";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((r) => r.json());
function ModalClientDetail() {
  const router = useRouter();

  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/api/post/data/" + router.query.postid,
    fetcher,
    { dedupingInterval: 300000 }
  );
  {
    data && console.log(data);
  }

  return (
    <div className="px-6">
      {data ? (
        <Link href={`/chat/${data.user}`}>
          <button
            className="mt-10 bg-upworkgreen-light py-1.5 w-full
      transition duration-500  ease-in-out hover:bg-upworkgreen-dark  text-white block   rounded-full"
          >
            Submit a Propsal
          </button>
        </Link>
      ) : (
        <button
          className="mt-10 bg-upworkgreen-light py-1.5 w-full
      transition duration-500  ease-in-out hover:bg-upworkgreen-dark  text-white block   rounded-full"
        >
          Submit a Propsal
        </button>
      )}
      <button
        className="mt-5 flex  justify-center font-semibold
        border border-gray-200
        bg-white py-1.5 w-full
      transition duration-500  ease-in-out hover:bg-gray-50  text-upworkgreen-light   rounded-full"
      >
        <span className="flex items-center gap-x-2 ">
          <BiHeart className="transform scale-125" /> <div>Save Job</div>
        </span>
      </button>
      <div className=" pt-8 pb-4 flex items-center gap-x-1 text-upworkgreen-light group hover:text-upworkgreen-dark">
        <div>
          <RiFlag2Fill />
        </div>
        <div className=" group-hover:underline font-semibold ">
          Flag as inappropriate
        </div>
      </div>
      <div className="pb-2 text-gray-600 flex  flex-wrap items-center ">
        <span className=" "> Required Connects to submit a</span>
        <div>propsal : 2 </div>
        <AiFillQuestionCircle className="mx-1 text-upworkgreen-dark" />
      </div>
      <div className="pb-4 text-gray-600">Available Connects : 174</div>
      <hr />
      <span>
        <div className="font-semibold text-lg py-4">About the Client</div>
        <div className="flex items-center gap-x-1 pb-2">
          <GoVerified className="text-upworkgreen-verified" />
          <span>Payment method verified</span>
        </div>
        <div className="flex items-center gap-x-1 py-4">
          {" "}
          <div>
            <StarRatings
              starDimension="20px"
              starSpacing="2px"
              rating={2.403}
              starRatedColor="#14a800"
              numberOfStars={5}
            />
          </div>
          <div className="text-gray-600 text-sm pt-2"> 5.00 of 2 reviews</div>
        </div>
        <div className="py-2">
          <div className="font-semibold">United States</div>
          <div className="text-gray-600">Wuerzburg 11:57 am</div>
        </div>
        <div className="py-2">
          <div className="font-semibold"> 10 jobs posted</div>
          <div className="text-gray-600">100% hire rate, 1 open job</div>
        </div>
        <div className="py-2">
          <div className="font-semibold"> $10k+total spent</div>
          <div className="text-gray-600">6 hires, 4 active</div>
        </div>
        <div className="py-2">
          <div className="font-semibold">49.2/hr avg hourly paid</div>
          <div className="text-gray-600">72 hours</div>
        </div>
        <div className="text-gray-700 text-xs pb-2">
          Member Since July, 2016
        </div>
      </span>
      <hr />
      <span>
        <div className="font-semibold py-4">Job Link</div>
        <div className=" overflow-hidden cursor-not-allowed select-none py-1 bg-gray-200 w-full pl-2 font-light text-gray-600">
          https://www.upwork.com/jobs
        </div>
        <div className="font-semibold text-upworkgreen-copylink hover:underline pt-1 pb-3">
          Copy link
        </div>
      </span>
    </div>
  );
}

export default ModalClientDetail;
