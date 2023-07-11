import React from "react";
import "../style/components-style/footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";

import brands from "../data/brands.json";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBrands">
        <p className="brandsTitle">Markalar</p>
        <div className="brandsList">
          {brands.map((item) => (
            <img src={item.image} alt="" />
          ))}
        </div>
      </div>
      <div className="footerMain">
        <div className="footerHelp">
          <p>BIKE24 Hakkında</p>
          <p>Şartlar ve koşullar</p>
          <p>Gizlilik Politikası</p>
          <p>Çerez Ayarları</p>
          <p>Geri bildirim</p>
        </div>
        <div className="footerHelp">
          <p>Yardum</p>
          <p>Fiyat Garantisi</p>
          <p>İadeler / Talepler</p>
          <p>Nakliye ve montaj</p>
          <p>İptal Hakkı</p>
        </div>
        <div className="footerPayMetods">
          <p>Ödeme</p>
          <FaCcMastercard className="payMetodIcon" />
          <FaCcVisa className="payMetodIcon" />
          <FaCcPaypal className="payMetodIcon" />
          <BsCashStack className="payMetodIcon" />
        </div>
      </div>
      <div className="footerBottom">
        <span>
          <p>BIKE24</p>
        </span>
        <span>
          <AiOutlineInstagram className="icon" />
          <AiOutlineYoutube className="icon" />
          <CiFacebook className="icon" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
