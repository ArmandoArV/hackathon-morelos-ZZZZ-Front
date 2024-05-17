import React from "react";
import "./Main.css"
import clara from "../../images/clara.png";

export default function MainPage() {
  return (
    <main className="main">
      <div className="landing">
        <div className="left-container">
          <p>Convierte</p>
        </div>
        <div className="right-container">
          <img className="clara" src={clara}></img>
        </div>
      </div>
    </main>
  );
}