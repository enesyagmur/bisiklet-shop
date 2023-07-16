import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Register from "./pages/Register";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//ürünler sayfası için yapılacaklar:
// ürünlerin üzerindeki kategori ismi ve sıralama tipi seçmeye yarayan select yapılacak
// filitre kısmı yapılacak
//ürünlerin altına bi kaç tane yatay görsel
// aşağı kaydırınca çıkan başa dön butonu tüm sayfalar için yapılacak
