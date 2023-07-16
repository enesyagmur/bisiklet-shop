import "../style/components-style/header.css";
import { BsBicycle } from "react-icons/bs";
import { GiGloves } from "react-icons/gi";
import { TbHelmet } from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";
import { PiBatteryChargingVerticalLight } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProfileStatus,
  changeSepetStatus,
  changeCategoryStatus,
  closeAllWindows,
} from "../redux/slice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { componentState } = useSelector((state) => state.components);
  const dispatch = useDispatch();

  const profileShow = () => {
    dispatch(changeProfileStatus());
  };
  const sepetShow = () => {
    dispatch(changeSepetStatus());
  };
  const categoryShow = () => {
    dispatch(changeCategoryStatus());
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goProducts = () => {
    navigate("/products");
  };

  return (
    <div className="header">
      <div className="headerTop"></div>
      <div className="headerBottom">
        <div className="header-logo" onClick={goHome}>
          <h1>BIKE24</h1>
        </div>
        <div className="header-category">
          <div>
            <AiOutlineMenu className="icon" onClick={categoryShow} />
            <p>HEPSİ</p>
          </div>
          <div>
            <BsBicycle className="icon" onClick={goProducts} />
            <p>PARÇALAR</p>
          </div>
          <div>
            <GiGloves className="icon" onClick={goProducts} />
            <p>GİYİM</p>
          </div>
          <div>
            <TbHelmet className="icon" onClick={goProducts} />
            <p>KORUMA</p>
          </div>
          <div>
            <GiAutoRepair className="icon" onClick={goProducts} />
            <p>TAMİR</p>
          </div>
          <div>
            <PiBatteryChargingVerticalLight
              className="icon"
              onClick={goProducts}
            />
            <p>AKSESUARLAR</p>
          </div>
        </div>

        <input type="text" placeholder="Arama" className="serachBar" />
        <BsSearch className="icon" id="searchIcon" onClick={goProducts} />

        <div className="header-account">
          <MdOutlineAccountCircle className="icon" onClick={profileShow} />
          <AiOutlineHeart className="icon" />
          <SlBasket className="icon" onClick={sepetShow} />
        </div>
      </div>
    </div>
  );
};

export default Header;
