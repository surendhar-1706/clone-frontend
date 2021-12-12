import HomePost from "../../components/HomePost";
import Layouttwo from "../../components/Layout/Layouttwo";
import useSWR from "swr";

import PostDetail from "../../components/PostDetail";
import PostSearch from "../../components/PostSearch";
import { useEffect, useState } from "react";
import MostRecent from "../../components/PostComponents/MostRecent";
const fetcher = (url) => fetch(url).then((r) => r.json());
function BestMatches(props) {
  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/api/post/data",
    fetcher,
    { dedupingInterval: 300000 }
  );

  return (
    <Layouttwo>
      <div className="bg-gray-100 sm:px-20 md:px-40 md:pt-7">
        <PostSearch />
      </div>
      <div className="bg-gray-100 md:grid gap-2 grid-cols-6 sm:px-20 md:px-40 py-5 ">
        <div className="">
          <MostRecent />
        </div>
        <div className="col-span-4 border  border-gray-300 rounded-lg bg-white">
          {data && <HomePost post={data} />}
        </div>
        <div>wow</div>
      </div>
    </Layouttwo>
  );
}
export default BestMatches;
// export default Authcheck(PostListing);
