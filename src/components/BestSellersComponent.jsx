import React from "react";
import products from "../data/products.json";
import "../style/home.css";

const BestSellersComponent = () => {
  return (
    <div className="productsList">
      <p className="listName">ÇOK SATANLAR</p>
      <div className="bestSellerProducts">
        {products.map((item) => (
          <div className="product" key={item.id}>
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
