import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/home.css";
import products from "../data/products.json";

const DiscountedProductsComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="bestProductList">
          <div className="product">
            <p className="productName">{products[0].name}</p>
            <img src={products[0].image} alt="" className="productImage" />
            <p className="productPrice">{products[0].price}$</p>
          </div>
          <div className="product">
            <p className="productName">{products[1].name}</p>
            <img src={products[1].image} alt="" className="productImage" />
            <p className="productPrice">{products[1].price}$</p>
          </div>
          <div className="product">
            <p className="productName">{products[2].name}</p>
            <img src={products[2].image} alt="" className="productImage" />
            <p className="productPrice">{products[2].price}$</p>
          </div>
          <div className="product">
            <p className="productName">{products[3].name}</p>
            <img src={products[3].image} alt="" className="productImage" />
            <p className="productPrice">{products[3].price}$</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bestProductList ">
          <div className="product">
            <p className="productName">{products[0].name}</p>
            <img src={products[0].image} alt="" className="productImage" />
            <p className="productPrice">{products[0].price}$</p>
          </div>
          <div className="product">
            <p className="productName">{products[1].name}</p>
            <img src={products[1].image} alt="" className="productImage" />
            <p className="productPrice">{products[1].price}$</p>
          </div>
          <div className="product">
            <p className="productName">{products[2].name}</p>
            <img src={products[2].image} alt="" className="productImage" />
            <p className="productPrice">{products[2].price}$</p>
          </div>
          <div className="product">
            <p className="productName">{products[3].name}</p>
            <img src={products[3].image} alt="" className="productImage" />
            <p className="productPrice">{products[3].price}$</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default DiscountedProductsComponent;
