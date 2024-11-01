import React from "react";
import "./Header.scss";
import logo from "../../assets/615px-Food_Network_New_Logo 2.svg";

const Header = () => {
  return (
    <>
      <div className="conteaner header">
        <div className="header__div">
          <img className="header__logo" src={logo} alt="" />
          <ul className="header__ul">
            <li className="header__li">Home</li>
            <li className="header__li">About us</li>
            <li className="header__li">Menu</li>
            <li className="header__li">Features</li>
            <li className="header__li">Contact us</li>
          </ul>
        </div>
        <button className="header__btn">Booking Now</button>
      </div>
    </>
  );
};

export default Header;
