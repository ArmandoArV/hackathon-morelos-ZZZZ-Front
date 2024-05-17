import React from "react";
import "./mainContainer.css";
import clara from "../images/clara.png"

export default function MainContainer() {
  return (
    <>
      <div className="mainContainer">
        <div className="left-Container">
          <p>Aprender de finanzas nunca fue tan fácil </p>
        </div>
        <div className="right-Container">
          <div className="imageContainer">
            <img className="clara" src={clara}></img>
          </div>
        </div>
      </div>
    </>
  );
}
