import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotIcon from '../../images/botIcon.png';
import './bot.css';
import groupStars1 from '../../images/groupStars1.svg';
import groupStars2 from '../../images/groupStars2.svg';
import { questions } from './preguntas';
import PersonalInfoComponent from '../../Components/PersonalInfoComponent/PersonalInfoComponent';

const PersonalInfo = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleStartClick = () => {
    setIsStarted(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Button clicked, input value:", inputValue);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("All questions answered");
      navigate('/dashboard');
    }
  };

  return (
    <main className='bot-container'>
      {!isStarted ? (
        <div className='container'>
          <div className='bot-header'>
            <img src={groupStars1} className='stars1' alt="Stars 1" />
            <img src={groupStars2} className='stars2' alt="Stars 2" />
            <img src={BotIcon} alt="Bot Icon" />
            <div className='saludo'>
              <h1>Hola, soy Freya y te guiaré hacia un mejor futuro financiero</h1>
            </div>
          </div>
          <button className='start-btn' type="button" onClick={handleStartClick}>Comenzar</button>
        </div>
      ) : (
        <PersonalInfoComponent
          title={questions[currentQuestionIndex].description}
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleButtonClick}
        />
      )}
    </main>
  );
};

export default PersonalInfo;
