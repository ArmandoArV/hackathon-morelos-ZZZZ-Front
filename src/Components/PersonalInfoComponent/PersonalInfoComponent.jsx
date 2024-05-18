import React from "react";
import "./PersonalInfoComponent.css";
export default function PersonalInfoComponent(props) {
    return (
        <>
            <div
                className="questions-container"
            >
                <div
                    className="topContainer"
                >
                    <h1>
                        {props.title}
                    </h1>
                </div>
                <div
                    className="mediumContainer"
                >
                    <input

                        type="number"
                        value={props.value}
                    >

                    </input>
                </div>
                <div
                    className="bottomContainer"
                >
                    <button
                        onClick={props.onClick}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    )

}