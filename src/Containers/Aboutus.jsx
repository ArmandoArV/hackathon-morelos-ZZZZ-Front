import React from "react";
import "./Aboutus.css";
import clara from "../images/clara.png"

export default function Aboutus() {
  return (
    <>
      <div className="aboutus">
        <div className="textinfo">
          <div className="title">
            <p>Conoce a Freya </p>
          </div>
          <div className="text">
              <p>
              Freya es tu nueva asesora en situaciones financieras, te ayudara a conocer mejor tus ingresos, egresos y deudas hasta te puede ayudar
              dando mensajes para que aprendas a manejar mejor tu dinero.<br></br>Nuestro enfoque va a mujeres jóvenes en México para que puedan sacar 
              provecho de sus ingresos y puedan aprender a llevar una vida economicamente más estable.
              </p>
          </div>
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
