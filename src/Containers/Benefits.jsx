import React from "react";
import "./Benefits.css";
import icono1 from "../images/icono1.png";
import icono2 from "../images/icono2.png";
import icono3 from "../images/icono3.png";
import IconComponent from "../Components/IconComponent/IconComponent";

export default function Benefits() {
  const arrayOfInfo = [
    {
      iconSrc: icono1,
      text: "Decisiones\n financieras\ninformadas.",
    },
    {
      iconSrc: icono2,
      text: "Administración\n efectiva\n de las finanzas",
    },
    {
      iconSrc: icono3,
      text: "Bienestar financiero mediante\n el logro de metas ",
    },
  ];
  return (
    <>
      <div className="benefits">
        <div className="titleb">
          <p>Goza de los siguientes beneficios</p>
        </div>
        <div className="iconContainer">
          {arrayOfInfo.map((info, index) => (
            <IconComponent
              key={index}
              iconSrc={info.iconSrc}
              text={info.text}
            />
          ))}
        </div>
      </div>
    </>
  );
}
