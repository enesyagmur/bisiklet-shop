import React from "react";
import "../style/components-style/login.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Login = () => {
  const { componentState } = useSelector((state) => state.components);
  console.log(componentState[0].profile);
  return <div id="login" className="close"></div>;
};

export default Login;
