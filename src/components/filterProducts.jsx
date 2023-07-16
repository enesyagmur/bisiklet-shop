import React from "react";
import "../style/products.css";

const FilterProducts = () => {
  return (
    <div className="filterProducts">
      <div className="saleFilter">
        <input type="checkbox" name="" id="" /> <p>İndirim</p>
      </div>
      <select name="" id="">
        <option value="">Renk</option>
        <option value="">Mavi</option>
        <option value="">Mavi</option>
        <option value="">Mavi</option>
      </select>
      <select name="" id="">
        <option value="">Fiyat</option>
        <option value="">0-100</option>
        <option value="">100-500</option>
        <option value="">500-1000</option>
      </select>
      <select name="" id="">
        <option value="">Marka</option>
        <option value="">Salcano</option>
        <option value="">Cube</option>
        <option value="">Scoot</option>
      </select>
      <select name="" id="">
        <option value="">Cinsiyet</option>
        <option value="">Erkek</option>
        <option value="">Kadın</option>
      </select>
    </div>
  );
};

export default FilterProducts;
