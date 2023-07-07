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
            <BsBicycle className="icon" />
            <p>PARÇALAR</p>
          </div>
          <div>
            <GiGloves className="icon" />
            <p>GİYİM</p>
          </div>
          <div>
            <TbHelmet className="icon" />
            <p>KORUMA</p>
          </div>
          <div>
            <GiAutoRepair className="icon" />
            <p>TAMİR</p>
          </div>
          <div>
            <PiBatteryChargingVerticalLight className="icon" />
            <p>AKSESUARLAR</p>
          </div>
        </div>
        <div className="header-search">
          <input type="text" placeholder="ürün ara" />
          <BsSearch className="icon" />
        </div>
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
