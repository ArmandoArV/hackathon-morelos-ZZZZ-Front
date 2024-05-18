import React from "react";
import "./Benefits.css";
import icono1 from "../images/icono1.png"
import icono2 from "../images/icono2.png"
import icono3 from "../images/icono3.png"

export default function Benefits() {
  return (
    <>
    <div className="benefits">
        <div className="titleb">
          <p>Beneficios</p>
        </div>
        <div className="icon">
            <div className="primericon">
                <div className="rectangulo1">
                    <div className="icon1">
                        <img className="icono1" src={icono1}></img>
                    </div>
                    <div className="texto1">
                        <p>Decisiones financieras<br></br> informadas.</p>
                    </div>
                </div> 
            </div>
            <div className="segundoicon">
                <div className="rectangulo2">
                    <div className="icon2">
                        <img className="icono2" src={icono2}></img>
                    </div>
                    <div className="texto2">
                        <p>Administración efectiva <br></br>de las finanzas.</p>
                    </div>
                </div> 
            </div>
            <div className="tercericon">
                <div className="rectangulo3">
                    <div className="icon3">
                        <img className="icono3" src={icono3}></img>
                    </div>
                    <div className="texto3">
                        <p>Alcanzar metas financieras, <br></br>y contribuir al bienestar <br></br>de sus familias.</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    </>
  );
}