import React from "react";
import "../style/home.css";
import Header from "../components/header";
import Login from "../components/Login";
import Sepet from "../components/Sepet";
import Category from "../components/Category";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Login />
      <Sepet />
      <Category />
    </div>
  );
};

export default Home;
