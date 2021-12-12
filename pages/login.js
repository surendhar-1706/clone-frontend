import { useContext, useEffect, useState } from "react";
import Login_Email from "../components/LoginEmail";
import LoginPass from "../components/LoginPass";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

import Layout from "../components/Layout";

function Login() {
  const { authstate } = useContext(AuthContext);
  const [userdata, setuserdata] = useState({ email: "", password: "" });
  const [showcomponent, setshowcomponent] = useState(true);
  const handleChange = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="">
        {showcomponent ? (
          <Login_Email
            userdata={userdata}
            setuserdata={setuserdata}
            setshowcomponent={setshowcomponent}
          />
        ) : (
          <LoginPass
            userdata={userdata}
            setuserdata={setuserdata}
            handleChange={handleChange}
          />
        )}
      </div>
    </Layout>
  );
}
// export default login;

export default Login;
