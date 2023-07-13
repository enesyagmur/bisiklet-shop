import React from "react";
import { useSelector } from "react-redux";
import "../style/components-style/category.css";

const Category = () => {
  const { componentState } = useSelector((state) => state.components);
  return (
    <div id="category" className={componentState[2] ? "open" : "close"}>
      <p className="categoryTitle">KATEGORİLER</p>
      <div className="categoryList">
        <p>Koruyucu ekipmanlar</p>
        <p>Çantalar</p>
        <p>Elektronik ekipmanlar</p>
        <p>Takılabilir aksesuarlar</p>
        <p>Tamir setleri ve ürünleri</p>
        <p style={{ color: "orange" }}>İndirimde olan ürünler</p>
      </div>
    </div>
  );
};

export default Category;
