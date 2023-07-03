import React from "react";
import "../style/home.css";
import Header from "../components/header";
import Login from "../components/Login";
import Sepet from "../components/Sepet";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Login />
      <Sepet />
    </div>
  );
};

export default Home;
