import React from "react";
import "../style/components-style/gotop.css";
import { AiOutlineArrowUp } from "react-icons/ai";
const GoTop = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="goTop" onClick={scrollUp}>
      <AiOutlineArrowUp className="top" />
    </div>
  );
};

export default GoTop;
