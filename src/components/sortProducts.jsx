import React from "react";
import "../style/products.css";
import { useDispatch } from "react-redux";
import { closeAllWindows } from "../redux/slice";

const SortProducts = () => {
  const dispatch = useDispatch();
  const closeWindows = () => {
    dispatch(closeAllWindows());
  };
  return (
    <div className="sortProducts" onClick={closeWindows}>
      <div className="filterTitle">
        <p>Filtre</p>
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
