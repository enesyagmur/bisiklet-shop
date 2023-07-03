import React from "react";
import "../style/components-style/sepet.css";
import { useSelector } from "react-redux";

const Sepet = () => {
  const { componentState } = useSelector((state) => state.components);
  return (
    <div id="sepet" className={componentState[1] ? "sepetOpen" : "sepetClose"}>
      Sepet
    </div>
  );
};

export default Sepet;
