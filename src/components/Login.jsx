import React from "react";
import "../style/components-style/login.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Login = () => {
  const { componentState } = useSelector((state) => state.components);

  return (
    <div id="login" className={componentState[0] ? "open" : "close"}>
      Login
    </div>
  );
};

export default Login;
