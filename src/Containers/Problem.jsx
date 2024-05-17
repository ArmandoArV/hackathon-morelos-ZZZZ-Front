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
                    <p><b>60%</b></p>
                </div>
                <div className="textp">
                    <p>Text</p>
                </div>
            </div>
            <div className="segundodato">
                <div className="año">
                    <p><b>2010</b></p>
                </div>
                <div className="texta">
                    <p>Text</p>
                </div>
            </div>
            <div className="tercerdato">
                <div className="numero">
                    <p><b>30</b></p>
                </div>
                <div className="textn">
                    <p>Text</p>
                </div>
            </div>
        </div>
        </div>
    </>
  );
}