import React, { useEffect } from "react";
import "../style/register.css";
import Header from "../components/header";
import Login from "../components/Login";
import Sepet from "../components/Sepet";
import Category from "../components/Category";
import { closeAllWindows } from "../redux/slice";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeAllWindows());
  }, []);
  // açılışta açık olan pencereleri kapatma

  return (
    <div className="register">
      <Header />
      <Login />
      <Sepet />
      <Category />
      <div className="registerInput">
        <div className="registerInputHeader">
          <p className="registerInputTitle">Hesap oluşturma</p>
          <p>
            Aşağıdaki kutuları doldurarak yeni bir müşteri hesabı oluşturun.
            Kayıt için kişisel veriler gerekir.
          </p>
        </div>
        <div className="userData">
          <p className="userDataTitle">Kullanıcı giriş bilgileri</p>
          <div className="userDataInput">
            <div className="userMailInput">
              <input type="text" placeholder="e-posta adresi" />
              <input type="text" placeholder="e-posta adresi tekrar" />
            </div>
            <div className="userPasswordInput">
              <input type="password" placeholder="şifre" />
              <p>Şifreniz en as 8 karakterden oluşmalıdır</p>
            </div>
          </div>

          <div className="personelData">
            <p className="personelDataTitle">Kişisel bilgiler</p>
            <div className="personelDataGender">
              <span>
                <input type="checkbox" name="" id="" />
                <p>Erkek</p>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <p>Kadın</p>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <p>Şirket</p>
              </span>
            </div>
            <div className="personelDataName">
              <input type="text" placeholder="İsim" />
              <input type="text" placeholder="Soy isim" />
            </div>
            <div className="personelDataAdress">
              <input type="text" placeholder="Sokak" />{" "}
              <input type="text" placeholder="Bina no" />{" "}
              <input type="text" placeholder="Daire" />
              <input type="text" placeholder="İlçe" />{" "}
              <input type="text" placeholder="Şehir" />{" "}
              <input type="text" placeholder="Posta Kodu" />
              <input type="text" placeholder="Adres Tarifi" />
            </div>
            <button className="registerBtn">Kayıt olmak</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
