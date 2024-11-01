import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Prodacts.scss";

const BASE_URL = "https://dummyjson.com";

const Prodacts = () => {
  const [prodacts, setProdacts] = useState(null);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        setProdacts(res.data.products);
      })
      .catch((err) => console.log(err))
      .finally();
  }, []);
  const prodactsItems = prodacts?.map((pro) => (
    <div key={pro.id} className="prodacts">
      <img className="prodacts__img" src={pro.images[0]} alt="" />
      <div className="prodacts__div-main">
        <h3 className="prodacts__h3">{pro.title}</h3>
        <p className="prodacts__p">{pro.price}$</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="prodacts__div conteaner">{prodactsItems}</div>
    </>
  );
};

export default Prodacts;
