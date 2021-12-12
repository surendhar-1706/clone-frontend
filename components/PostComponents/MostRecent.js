import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function MostRecent() {
  const router = useRouter();

  return (
    <div className="space-y-3 font-semibold">
      <Link href="/post">
        <a className="   ">
          {router.pathname == "/post" ? (
            <div className="flex  items-center">
              <div className="bg-green-600 h-10 w-1"></div>
              <div className="pl-4 pt-2 ">My Feed</div>
            </div>
          ) : (
            <div className="flex  items-center">
              <div className="bg-gray-100 h-10 w-1"></div>
              <div className="pl-4 pt-2  ">My Feed</div>
            </div>
          )}
        </a>
      </Link>
      <Link href="/post/bestmatch">
        <a className=" gap-2">
          {router.pathname == "/post/bestmatch" ? (
            <div className="flex  items-center">
              <div className="bg-green-600 h-10 w-1"></div>
              <div className="pl-4  pt-2  ">Best Matches</div>
            </div>
          ) : (
            <div className="flex   items-center">
              <div className="bg-gray-100 h-10 w-1"></div>
              <div className="pl-4 pt-2 ">Best Matches</div>
            </div>
          )}
        </a>
      </Link>
      <Link href="/">
        <a className=" gap-2">
          {router.pathname == "/" ? (
            <div className="flex items-center">
              <div className="bg-green-600 h-10 w-1"></div>
              <div className="pl-4  pt-2  ">Most Recent</div>
            </div>
          ) : (
            <div className="flex pb-5 items-center">
              <div className="bg-gray-100 h-10 w-1">
                {" "}
                <div className="pl-4 pt-2 "> Most Recent</div>
              </div>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}

export default MostRecent;
