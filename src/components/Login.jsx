import React from "react";
import { useSelector } from "react-redux";
import "../style/components-style/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { componentState } = useSelector((state) => state.components);
  const navigate = useNavigate();
  const goRegister = () => {
    navigate("/register");
  };

  return (
    <div
      id="login"
      className={componentState[0] ? "profileOpen" : "profileClose"}
    >
      <div className="loginTitle">
        <p>GİRİŞ</p>
      </div>
      <div className="loginMain">
        <div className="loginInput">
          <p>Hesabınıza Giriş Yapın</p>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Şifre" />
          <button>Giriş</button>
        </div>

        <div className="loginRegister">
          <p> Hesabınız Yok Mu? </p>
          <button>Hızlı Kayıt</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
