import React, { useContext, useEffect, useState } from "react";
import Navbartwo from "./Navbartwo";
import Footertwo from "./Footertwo";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";
import useSWR from "swr";

function Layouttwo({ children }) {
  const { dispatch, authstate } = useContext(AuthContext);
  const Router = useRouter();
  const [verified, setVerified] = useState(false);

  useEffect(async () => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      Router.replace("/login");
    } else if (accessToken && authstate.isAuthenticated !== false) {
      console.log(
        "user already verified--------------------------------------"
      );
      setVerified(true);
    } else {
      console.log(process.env.NEXT_PUBLIC_API_URL);
      const fetched_data = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/auth/token/verify/",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: accessToken,
          }),
        }
      );
      console.log(fetched_data);
      const json_data = await fetched_data.json();

      // if token was verified we set the state.
      if (json_data.code !== "token_not_valid") {
        setVerified(true);
        dispatch({
          type: "authenticated",
        });
      } else {
        // If the token was fraud we first remove it from localStorage and then redirect to "/"
        localStorage.removeItem("access_token");
        Router.replace("/login");
      }
    }
  }, []);
  if (verified) {
    return (
      <div>
        <Navbartwo />
        {children}
        <Footertwo />
      </div>
    );
  } else {
    return null;
  }
}

export default Layouttwo;
// useEffect((e) => {
//   console.log("check dispatched from useEffect");
//   if (localStorage.getItem("access_token")) {
//     dispatch({
//       type: "authenticated",
//     });
//   }
// }, []);
