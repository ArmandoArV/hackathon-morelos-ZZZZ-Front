import React, { useState, useEffect, useCallback } from "react";
import BotIcon from "../../images/botIcon.png";
import "./bot.css";
import { API_URL } from "../../constants";

const InicioBot = () => {
  const [options, setOptions] = useState({});
  const [secondOptions, setSecondOptions] = useState({});
  const [answers, setAnswers] = useState({});
  const [currentOption, setCurrentOption] = useState(null);
  const [currentSecondOption, setCurrentSecondOption] = useState(null);

  const fetchData = useCallback(async (type, endpoint, setter) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Data: ", data);
      if (Array.isArray(data)) {
        const dictionary = {};
        data.forEach((item, index) => {
          dictionary[item.idQuestions || item.idAnswers] = {
            ...item,
            opcion: index + 1,
          };
        });
        setter(dictionary);
      } else {
        console.error(`Error fetching ${type}: Data is not an array`);
      }
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
    }
  }, []);

  useEffect(() => {
    fetchData("initial options", "initialQuestions", setOptions);
  }, [fetchData]);

  useEffect(() => {
    if (currentOption !== null) {
      const endpoints = [
        "aforeQuestions",
        "saveQuestions",
        "learnfinanceQuestions",
        "inversionQuestions",
      ];
      fetchData(
        "second options",
        endpoints[currentOption - 1],
        setSecondOptions
      );
    }
  }, [currentOption, fetchData]);

  useEffect(() => {
    if (currentSecondOption !== null) {
      const endpoints = [
        "aforeAnswers",
        "saveAnswers",
        "learnfinanceAnswers",
        "inversionAnswers",
      ];
      fetchData("answers", endpoints[currentSecondOption - 1], setAnswers);
    }
  }, [currentSecondOption, fetchData]);

  const handleOptionClick = (opcion) => {
    setSecondOptions({});
    setCurrentOption(opcion);
    setCurrentSecondOption(null); // Reset second option
  };

  const handleSecondOptionClick = (opcion) => {
    setAnswers({});
    setCurrentSecondOption(opcion);
  };

  return (
    <>
      <img src={BotIcon} alt="Bot Icon" className="bot-icon" />
      <div className="bot-container">
        {Object.keys(options).length > 0 ? (
          <>
            <div></div>
            <p>
              Hola, soy Clara, tu asistente financiero. ¿En qué puedo ayudarte
              hoy?
            </p>
            <p>Selecciona una opción para comenzar a aprender sobre finanzas</p>
            {Object.values(options).map((option) => (
              <button
                key={option.idQuestions}
                className="message"
                onClick={() => handleOptionClick(option.opcion)}
              >
                {option.questionName}
              </button>
            ))}
          </>
        ) : (
          <div className="message">Loading...</div>
        )}
        {currentOption && Object.keys(secondOptions).length > 0 && (
          <>
            <p>
              Selecciona una opción para aprender sobre{" "}
              {
                ["AFORE", "Ahorrar", "Finanzas", "Inversiones"][
                  currentOption - 1
                ]
              }
            </p>
            {Object.values(secondOptions).map((option) => (
              <button
                key={option.idQuestions}
                className="message"
                onClick={() => handleSecondOptionClick(option.opcion)}
              >
                {option.questionName}
              </button>
            ))}
          </>
        )}
        {currentSecondOption && Object.keys(answers).length > 0 && (
          <>
            <p>Respuestas:</p>
            {Object.values(answers).map((answer) => (
              <div key={answer.idAnswers} className="message">
                {answer.answers || answer.answer}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default InicioBot;
