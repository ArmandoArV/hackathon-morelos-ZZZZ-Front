import React from "react";
import "./Problem.css";

export default function Problem() {
  return (
    <>
      <div className="problem">
        <div className="titleP">
          <p>Problemática </p>
        </div>
        <div className="datos">
            <div className="primerdato">
                <div className="porcentaje">
                    <p><b>70%</b></p>
                </div>
                <div className="textp">
                    <p>de las mujeres no tienen tarjeta de crédito.</p>
                </div>
            </div>
            <div className="segundodato">
                <div className="año">
                    <p><b>52%</b></p>
                </div>
                <div className="texta">
                    <p>de las mujeres no tiene cuenta crediticia</p>
                </div>
            </div>
            <div className="tercerdato">
                <div className="numero">
                    <p><b>51.2%</b></p>
                </div>
                <div className="textn">
                    <p>de la población en México son mujeres.</p>
                </div>
            </div>
        </div>
        </div>
    </>
  );
}