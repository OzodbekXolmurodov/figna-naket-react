import React from "react";
import "./Abaut.scss";
import rasim from "../../assets/CSmJnTefxM 1.svg";
const About = () => {
  return (
    <>
      <div className="conteaner abaut">
        <div className="about__div-rgh">
          <h2 className="abaut__h2">
            Making time a good time by making food the good food.
          </h2>
          <p className="abaut__p">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment,
          </p>
          <div className="abaut__div-btn">
            <button className="abaut__btn">Order Now</button>
            <button className="abaut__btn-2">Food Details</button>
          </div>
        </div>
        <div className="abaut__div-left">
          <img className="about__img" src={rasim} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
