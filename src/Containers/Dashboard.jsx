import React from "react";
import "./Dashboard.css";
import clara from "../images/clara.png"



export default function Dashboard() {
  return (
    <>
        <div className="dashboard">
            <div className="widgets">
                <div className="arriba">

                    <div className="deuda">
                        <div className="rectangulod">
                            <div className="deudasw">
                                <p>Deuda</p>
                            </div>
                            <div className="montod">
                                <p><b>$500</b></p>
                            </div>
                        </div>
                    </div>

                    <div className="ingresos">
                        <div className="rectanguloi">
                            <div className="ingresosw">
                                <p>Ingresos</p>
                            </div>
                            <div className="montoi">
                                <p><b>$2000</b></p>
                            </div>
                        </div>
                    </div>

                    <div className="egresos">
                        <div className="rectanguloe">
                            <div className="egresosw">
                                <p>Egresos</p>
                            </div>
                            <div className="montoe">
                                <p><b>$5489</b></p>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="abajo">
                    <div className="grafica">
                        <div className="rectangulog">
                            <div className="finanzas">
                                <p>Análisis Financiero</p>
                            </div>
                        </div>
                    </div>
                    <div className="robot">
                        <img className="clara" src={clara}></img>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
}

