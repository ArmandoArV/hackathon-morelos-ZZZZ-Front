import React from "react";
import "./Problem.css";

export default function Problem() {
  return (
    <>
      <div className="problem">
        <div className="titleP">
          <p>El rezago en la inclusión financiera en mujeres en México</p>
        </div>
        <div className="datos">
          <div className="primerdato">
            <div className="porcentaje">
              <p>
                <b>70%</b>
              </p>
            </div>
            <div className="textp">
              <p>
                de las mujeres<br></br>no tienen tarjeta <br></br> de crédito
              </p>
            </div>
          </div>
          <div className="segundodato">
            <div className="año">
              <p>
                <b>52%</b>
              </p>
            </div>
            <div className="texta">
              <p>
                de las mujeres <br></br> no tienen cuenta<br></br>bancaria
              </p>
            </div>
          </div>
          <div className="tercerdato">
            <div className="numero">
              <p>
                <b>51.2%</b>
              </p>
            </div>
            <div className="textn">
              <p>
                de la población<br></br>en México son<br></br> mujeres
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
