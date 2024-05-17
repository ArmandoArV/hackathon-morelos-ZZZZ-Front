import React from "react";
import "./Benefits.css";

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
                    <div className="circunferencia1">
                        <div className="icon1">
                            <p>icon</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="segundoicon">
                <div className="rectangulo2">
                    <div className="circunferencia2">
                        <div className="icon2">
                            <p>icon</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="tercericon">
                <div className="rectangulo3">
                    <div className="circunferencia3">
                        <div className="icon3">
                            <p>icon</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    </>
  );
}