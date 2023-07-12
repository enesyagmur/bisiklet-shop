import "../style/home.css";

import React, { useEffect, useState } from "react";
import sliders from "../data/sliders.json";

const Slider = () => {
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
    <div className="homeSliderLeft">
      <img src={sliders[sliderCount].image} alt="" />
      <button
        className="sliderLeftBtn sliderBtn"
        onClick={() => changeSlider("left")}
      >
        Left
      </button>
      <button
        className="sliderRightBtn sliderBtn"
        onClick={() => changeSlider("right")}
      >
        Right
      </button>
    </div>
  );
};

export default Slider;
