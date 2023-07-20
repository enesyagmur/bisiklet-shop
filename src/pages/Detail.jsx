import React from "react";
import "../style/detail.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products.json";
import GoTop from "../components/goTop";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="detail">
      <GoTop />
      <Header />
      <div className="detailMain">
        <div id="product">
          <div id="productImage">
            <img src={products[id].image} alt="" />
          </div>
          <div className="productDetail">
            <p className="productName"> {products[id].name}</p>
            <p className="productPrice">{products[id].price} TL</p>
            <div className="addBasket">
              <div className="count">- 0 +</div> <button>SEPETE EKLE</button>
            </div>
          </div>
        </div>
        <div className="similarProducts">
          {products.map((item) => (
            <div
              className="similarProduct"
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
      <Footer />
    </div>
  );
};

export default Detail;
