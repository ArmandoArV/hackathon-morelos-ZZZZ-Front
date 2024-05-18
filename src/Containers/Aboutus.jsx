import React from "react";
import "./Aboutus.css";
import clara from "../images/clara.png";

export default function Aboutus() {
  return (
    <>
      <div className="aboutus">
        <div className="textinfo">
          <div className="title">
            <p>Conoce a Freya </p>
          </div>
          <div className="paragraph1">
            <p>
              Freya es tu nueva asesora en situaciones financieras, te ayudará a
              conocer mejor tus ingresos, egresos y deudas hasta te puede ayudar
              dando mensajes para que aprendas a manejar mejor tu dinero.
            </p>
          </div>
          <div className="paragraph2">
            <p>
              Nuestro enfoque es empoderar a mujeres jóvenes en México a través de la educación financiera 
              para que puedan sacar provecho de sus ingresos y puedan aprender a llevar
              una vida económicamente más estable.
            </p>
          </div>
        </div>
        <div className="right-Container">
          <div className="imageContainer">
            <img src={clara} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
