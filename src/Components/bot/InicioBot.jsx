import React, { useState, useEffect, useCallback } from "react";
import BotIcon from "../../images/botIcon.png";
import "./bot.css";
import groupStars1 from "../../images/groupStars1.svg";
import groupStars2 from "../../images/groupStars2.svg";
import { API_URL } from "../../constants";

const InicioBot = () => {
  const [options, setOptions] = useState([]);

  // Function to fetch options from API, memoized with useCallback
  const fetchOptions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/initialQuestions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setOptions(data); // Assuming the API response is an array of options
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  }, []);

  // Fetch options when the component mounts
  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  return (
    <div className="bot-container">
      <img src={BotIcon} alt="Bot Icon" className="bot-icon" />
      {options.length > 0 ? (
        options.map((option) => (
          <button key={option.idQuestions} className="message">
            {option.questionName}
          </button>
        ))
      ) : (
        <div className="message">Loading...</div>
      )}
    </div>
  );
};

export default InicioBot;
