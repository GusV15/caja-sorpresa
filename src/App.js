import React, { useState } from "react";
import "./styles.css";
import question from "./img/question.PNG";

/**
 * deberas crear una función que muestre
 * alguna de estas 3 imagenes aleatoriamente
 */
import honguito from "./img/mushroom.png";
import flor from "./img/fire_flower.png";
import moneda from "./img/coin.png";

export default function App() {
  const [image, setImage] = useState(honguito);

  const arrayImage = [honguito, flor, moneda];

  const handleClick = e => {
    const imageRandom = Math.floor(Math.random() * arrayImage.length);
    setImage(arrayImage[imageRandom]);
  };

  return (
    <div className="App">
        <img
          onClick={handleClick}
          className="cajita"
          src={question}
          alt="cajita"
        />
        <img className="item" src={image} alt="item" />
    </div>
  );
}
