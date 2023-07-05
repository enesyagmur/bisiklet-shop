import React from "react";
import { useSelector } from "react-redux";
import "../style/components-style/category.css";

const Category = () => {
  const { componentState } = useSelector((state) => state.components);
  return (
    <div id="category" className={componentState[2] ? "open" : "close"}>
      <p>Kasklar</p>
    </div>
  );
};

export default Category;
