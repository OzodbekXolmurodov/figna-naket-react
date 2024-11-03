import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Prodacts.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const BASE_URL = "https://dummyjson.com";

const Prodacts = () => {
  const [prodacts, setProdacts] = useState(null);
  const [offset, setOffset] = useState(1);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/products?limit=${6 * offset}`)
      .then((res) => {
        setProdacts(res.data.products);
      })
      .catch((err) => console.log(err))
      .finally();
  }, [offset]);
  useEffect(() => {
    AOS.init();
  }, []);
  const prodactsItems = prodacts?.map((pro) => (
    <div data-aos="zoom-in" key={pro.id} className="prodacts">
      <img className="prodacts__img" src={pro.images[0]} alt="" />
      <div className="prodacts__div-main">
        <h3 className="prodacts__h3">{pro.title}</h3>
        <p className="prodacts__p">{pro.price}$</p>
      </div>
      <p className="prodacts__description">{pro.description}</p>
    </div>
  ));

  return (
    <>
      <div className="conteaner">
        <h3 className="prodacts__h3-2">Menu</h3>
        <h2 className="prodacts__h2">Food Full of treaty Love</h2>
        <p className="prodacts__p2">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,{" "}
        </p>
      </div>
      <div className="prodacts__div conteaner">{prodactsItems}</div>
      <div className="conteaner">
        <button
          onClick={() => setOffset((p) => p + 1)}
          className="prodacts__btnsee"
        >
          See mor
        </button>
      </div>
    </>
  );
};

export default Prodacts;
