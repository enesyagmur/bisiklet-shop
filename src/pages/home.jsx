import React, { useState } from "react";
import "../style/home.css";
import Header from "../components/header";
import Login from "../components/Login";
import Sepet from "../components/Sepet";
import Category from "../components/Category";
import Footer from "../components/Footer";
import { closeAllWindows } from "../redux/slice";
import { useDispatch } from "react-redux";
import sliders from "../data/sliders.json";

const Home = () => {
  const dispatch = useDispatch();
  const closeWindows = () => {
    dispatch(closeAllWindows());
  };

  let sliderCount = 0;

  const changeSlider = (side) => {
    if (side === "right") {
      sliderCount++;
      setSlider(sliders[sliderCount]);
    } else if (side === "left") {
      sliderCount--;
      setSlider(sliders[sliderCount]);
    }
  };

  const [slider, setSlider] = useState(sliders[sliderCount]);
  console.log(slider);
  return (
    <div className="home">
      <Header />
      <Login />
      <Sepet />
      <Category />
      <div className="homeMain" onClick={closeWindows}>
        <div className="homeSlider">
          <button
            className="sliderLeftBtn"
            onClick={() => changeSlider("left")}
          >
            left
          </button>
          <button
            className="sliderRightBtn"
            onClick={() => changeSlider("right")}
          >
            right
          </button>

          <img src={slider.image} alt="" />
        </div>

        <div className="homeDiscount"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
