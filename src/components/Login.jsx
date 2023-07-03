import React from "react";
import { useSelector } from "react-redux";
import "../style/components-style/login.css";

const Login = () => {
  const { componentState } = useSelector((state) => state.components);

  return (
    <div
      id="login"
      className={componentState[0] ? "profileOpen" : "profileClose"}
    >
      Login
    </div>
  );
};

export default Login;
