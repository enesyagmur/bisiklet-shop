import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//home sayfası için yapılacaklar:
//resim slıder ını düzeltme normal usul ile yapma
//bir kaç adet ürünün bulunduğu slider tarzı kayan ürünler
//pencerelerin resimlerin altında açılma sorunu
// üstteki mantığın aynısı bir bölüm daha sadece indirimli ürünlerin olduğu
// footer ın düzenlenmesi
