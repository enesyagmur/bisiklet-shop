import React, { useEffect, useState } from "react";
import "../style/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/header";
import Login from "../components/Login";
import Sepet from "../components/Sepet";
import Category from "../components/Category";
import Footer from "../components/Footer";
import { closeAllWindows } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import sliders from "../data/sliders.json";
import BestSellersComponent from "../components/BestSellersComponent";
import DiscountedProductsComponent from "../components/DiscountedProductsComponent";
import ImageCategory from "../components/ImageCategory";
import Slider from "../components/Slider";

const Home = () => {
  const dispatch = useDispatch();
  const closeWindows = () => {
    dispatch(closeAllWindows());
  };

  return (
    <div className="home">
      <Header />
      <Login />
      <Sepet />

      <div className="homeMain" onClick={closeWindows}>
        <div className="homeSlider">
          <Slider />
          <Category />
          <div className="homeSliderRight">
            <div className="sliderRightTop">
              <p>RUNNING</p>
            </div>
            <div className="sliderRightCenter">
              <p>OUTDOOR</p>
            </div>
            <div className="sliderRightBottom">
              <p>SWIMING</p>
            </div>
          </div>
        </div>

        <BestSellersComponent />

        <DiscountedProductsComponent />
        <ImageCategory />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
