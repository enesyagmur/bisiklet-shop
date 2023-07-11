import React from "react";
import "../style/home.css";
import products from "../data/products.json";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DiscountedProductsComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {products.map((item) => (
        <div className="discountProduct">
          <p className="productName">{item.name}</p>
          <img src={item.image} alt="" className="productImage" />
          <p className="productPrice">{item.price}$</p>
        </div>
      ))}
    </Carousel>
  );
};

export default DiscountedProductsComponent;
