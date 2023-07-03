import React from "react";
import "../style/home.css";
import Header from "../components/header";
import Login from "../components/Login";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Login />
    </div>
  );
};

export default Home;
