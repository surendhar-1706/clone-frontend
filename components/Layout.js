import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import login from "../pages/login";
 
function Layout({ children }) {
  const router = useRouter();
  const { dispatch, authstate } = useContext(AuthContext);

  // useEffect((e) => {
  //   console.log("check dispatched from useEffect");
  //   if (localStorage.getItem("access_token")) {
  //     dispatch({
  //       type: "logout",
  //     });
  //   }
  // }, []);

  return (
    <div>
      <nav className="p-4 text-green-500 relative font-bold text-xl pl-36">
        <p className=" ">upwork</p>
      </nav>
      <hr className="mt-2"></hr>
      {children}
      <footer className="bg-gray-800 text-white text-center ">
        <div className=" pt-4 mb-2">© 2015 - 2021 Upwork® Global Inc.</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div> Accessibility</div>
      </footer>
    </div>
  );
}

export default Layout;
