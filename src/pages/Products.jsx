import React from "react";
import Header from "../components/header";
import Login from "../components/Login";
import Sepet from "../components/Sepet";
import Category from "../components/Category";
import { closeAllWindows } from "../redux/slice";
import "../style/products.css";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import products from "../data/products.json";
import SortProducts from "../components/sortProducts";
import FilterProducts from "../components/filterProducts";

const Products = () => {
  const dispatch = useDispatch();
  const closeWindows = () => {
    dispatch(closeAllWindows());
  };
  return (
    <div className="products">
      <Header />
      <Login />
      <Sepet />
      <Category />
      <SortProducts />
      <div className="productsMain" onClick={closeWindows}>
        <FilterProducts />
        <div className="productList">
          {products.map((item) => (
            <div className="product" key={item.id}>
              <p className="productName">{item.name}</p>
              <img src={item.image} alt="" className="productImage" />
              <p className="productPrice">{item.price} TL</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
