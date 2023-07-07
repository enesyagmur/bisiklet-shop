import React from "react";
import "../style/components-style/footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBrands">
        <p className="brandsTitle">Markalar</p>
        <div className="brandsList"></div>
      </div>
      <div className="footerMain">
        <div className="footerHelp">
          <p>Yardım</p>
        </div>
        <div className="footerPayMethods">
          <p>Ödeme</p>
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
