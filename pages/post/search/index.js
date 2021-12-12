import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import useSWR from "swr";
import SearchResult from "../../../components/Search/SearchResult";
import Layouttwo from "../../../components/Layout/Layouttwo";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/AuthContext";
import PostSearch from "../../../components/PostSearch";
import MostRecent from "../../../components/PostComponents/MostRecent";
import { AnimatePresence } from "framer-motion";
import PostProfile from "../../../components/Profile/PostProfile";
import SearchSort from "../../../components/Search/SearchSort";
const fetcher = (url) => fetch(url).then((r) => r.json());
function Search() {
  const { authstate, dispatch } = useContext(AuthContext);
  const router = useRouter();
  const [shouldfetch, setshouldfetch] = useState(false);
  const [date, setdate] = useState("date_created");
  const { data, error } = useSWR(
    shouldfetch
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/search?title=${router.query.title}&ordering=${router.query.ordering}`
      : null,
    fetcher,
    { dedupingInterval: 300000 }
  );
  useEffect(async () => {
    console.log("running inside ");

    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      dispatch({
        type: "authenticated",
      });
      setshouldfetch(true);
    }
  }, [date]);
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => {
        console.log(
          "onexit complete triggered from search index page -------------------------"
        );
      }}
    >
      <Layouttwo>
        <Head>
          <title>Freelance Jobs Online</title>
        </Head>
        <div className="bg-gray-100 sm:px-20 md:px-40 md:pt-7">
          <PostSearch />
        </div>
        <div className="bg-gray-100 md:grid gap-2 grid-cols-6 sm:px-20 md:px-40 py-5 ">
          <div className="">
            <SearchSort />
          </div>
          <div className="col-span-4 border  border-gray-300 rounded-lg bg-white">
            {/* {console.log(data, "printing data from index search page")} */}
            {authstate.isAuthenticated && data && <SearchResult data={data} />}
          </div>
          <div>
            <PostProfile />
          </div>
        </div>
      </Layouttwo>
    </AnimatePresence>
  );
}

export default Search;
