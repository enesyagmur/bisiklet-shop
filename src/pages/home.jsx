import React, { useEffect, useState } from "react";
import "../style/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/header";
import Login from "../components/Login";
import Sepet from "../components/Sepet";
import Category from "../components/Category";
import Footer from "../components/Footer";
import { closeAllWindows } from "../redux/slice";
import { useDispatch } from "react-redux";
import sliders from "../data/sliders.json";
import BestSellersComponent from "../components/BestSellersComponent";
import CarouselComponent from "../components/CarouselComponent";
import DiscountedProductsComponent from "../components/DiscountedProductsComponent";

const Home = () => {
  const dispatch = useDispatch();
  const closeWindows = () => {
    dispatch(closeAllWindows());
  };
  const [sliderCount, setSliderCount] = useState(0);
  const [slider, setSlider] = useState(sliders[sliderCount]);

  const changeSlider = (side) => {
    if (side === "right") {
      if (sliderCount < 2) {
        setSliderCount(sliderCount + 1);
      } else {
        setSliderCount(sliderCount - 2);
      }
    } else if (side === "left") {
      if (sliderCount > 0) {
        setSliderCount(sliderCount - 1);
      } else {
        setSliderCount(sliderCount + 2);
      }
    }
  };

  useEffect(() => {
    setSlider(sliders[sliderCount]);
  }, [sliderCount]);

  return (
    <div className="home">
      <Header />
      <Login />
      <Sepet />
      <Category />
      <div className="homeMain" onClick={closeWindows}>
        <div className="homeSlider">
          <div className="homeSliderLeft">
            <CarouselComponent />
          </div>

          <div className="homeSliderRight">
            <div className="sliderRightTop"></div>
            <div className="sliderRightCenter"></div>
            <div className="sliderRightBottom"></div>
          </div>
        </div>
        <div className="bestSellerProducts">
          <BestSellersComponent />
        </div>
        <div className="discountedProducts">
          <DiscountedProductsComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
