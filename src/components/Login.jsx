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
      <p className="loginHeader">Login</p>
      <div className="loginInput">
        <p>Hesabınıza giriş yapın</p>
        <input type="text" placeholder="mail adresi giriniz" />
        <input type="pasword" placeholder="şifre" />
        <button>Giriş</button>
      </div>
      <div className="register">
        <p>Hesabınız yok mu?</p>
        <button>Hızlı kayıt</button>
      </div>
    </div>
  );
};

export default Login;
