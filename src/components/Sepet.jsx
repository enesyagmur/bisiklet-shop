import React from "react";
import "../style/components-style/sepet.css";
import { useSelector } from "react-redux";

const Sepet = () => {
  const { componentState } = useSelector((state) => state.components);
  return (
    <div id="sepet" className={componentState[1] ? "sepetOpen" : "sepetClose"}>
      <p className="sepetTitle">Sepet</p>
      <div className="sepetList">
        <div className="sepetCount">
          <p>Sepetiniz</p> <p>0</p>
        </div>
        <div className="sepetProducts">
          <p>sepetiniz boş</p>
        </div>
        <div className="sepetPrice">
          <p>Toplam tutar:</p> <p>TL</p>
        </div>
        <button className="orderBtn">Sipariş oluştur</button>
        <button className="continueBtn">Alışverişe devam</button>
      </div>
    </div>
  );
};

export default Sepet;
