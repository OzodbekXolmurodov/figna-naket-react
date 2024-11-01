import React from "react";
import "./Main.scss";
import rasim3 from "../../assets/Group 94.svg";
import rasim4 from "../../assets/Mask Group.svg";

const Main = () => {
  return (
    <>
      <div className="conteaner main ">
        <h3 className="main__h3">Features</h3>
        <h2 className="main__h2">Food with a New Passion</h2>
        <div className="main__div">
          <div className="main__divs">
            <img className="main__img" src={rasim3} alt="" />
            <h3 className="main__h3-2">Quality Food</h3>
            <p className="main__p">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
          <div className="main__divs">
            <img className="main__img" src={rasim3} alt="" />
            <h3 className="main__h3-2">Quality Food</h3>
            <p className="main__p">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
          <div className="main__divs">
            <img className="main__img" src={rasim3} alt="" />
            <h3 className="main__h3-2">Quality Food</h3>
            <p className="main__p">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
        </div>
        <div className="main__2div">
          <div className="main__2div-rgh">
            <img className="main__img2" src={rasim4} alt="" />
          </div>
          <div className="main__2div-left">
            <h3 className="main__2h3">About US</h3>
            <h2 className="main__2h2">
              Food Stalls with Persons but to Product marketing plane catlogues
              etc to.{" "}
            </h2>
            <p className="main__2p">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </p>
            <button className="main__2btn">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
