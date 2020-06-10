import React from "react";
import "./styles.css";
import backGround from "./img/overworld_bg.jpg";
import question from "./img/question.PNG";

/**
 * deberas crear una función que muestre
 * alguna de estas 3 imagenes aleatoriamente
 */
import honguito from "./img/mushroom.png";
import flor from "./img/fire_flower.png";
import moneda from "./img/coin.png";

export default function App() {
  return (
    <div className="App">
      <img className="cajita" src={question} alt="cajita" />
      <img className="item" src={honguito} alt="item" />
      <img src={backGround} alt="backGround" />
    </div>
  );
}
