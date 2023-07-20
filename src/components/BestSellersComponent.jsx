import React from "react";
import products from "../data/products.json";
import "../style/home.css";
import { useNavigate } from "react-router-dom";

const BestSellersComponent = () => {
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="productsList">
      <p className="listName">ÇOK SATANLAR</p>
      <div className="bestSellerProducts">
        {products.map((item) => (
          <div
            className="product"
            key={item.id}
            onClick={() => goDetail(item.id)}
          >
            <p className="productName">{item.name}</p>
            <img src={item.image} alt="" className="productImage" />
            <p className="productPrice">{item.price} TL</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersComponent;
