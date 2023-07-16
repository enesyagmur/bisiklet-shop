import React from "react";
import "../style/products.css";

const SortProducts = () => {
  return (
    <div className="sortProducts">
      <div className="filterTitle">
        <p>Filter</p>
      </div>
      <div className="sort">
        <p>Ürünler</p>
        <select name="" id="">
          <option value="">Fiyata göre artan</option>
          <option value="">Fiyata göre azalan</option>
          <option value="">Çok satanlar</option>
          <option value="">En çok puanlanan</option>
        </select>
      </div>
    </div>
  );
};

export default SortProducts;
