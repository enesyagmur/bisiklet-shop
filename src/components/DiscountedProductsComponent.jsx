import React from "react";
import "../style/home.css";
import products from "../data/products.json";
import { useNavigate } from "react-router-dom";

const DiscountedProductsComponent = () => {
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="productsList">
      <p className="listName">İNDİRİMLİ ÜRÜNLER</p>
      <div className="discountedProducts">
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

export default DiscountedProductsComponent;
