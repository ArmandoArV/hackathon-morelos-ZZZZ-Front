import React from 'react'
import BotIcon from '../../images/botIcon.png'
import './bot.css'
import groupStars1 from '../../images/groupStars1.svg'
import groupStars2 from '../../images/groupStars2.svg'

const InicioBot = () => {
  return (
    <main className='bot-container'>
        <div>
          <div className='bot-header'>
                 <img src = {groupStars1} className='stars1'></img>
                 <img src = {groupStars2} className='stars2'></img>
                  <img src={BotIcon}></img>
                  <div className='saludo'>
                      <h1 > Hola, soy Freya  y te guiaré hacia un mejor futuro financiero</h1>
                  </div>
              </div>
              <button className='start-btn'>Comenzar</button>
              
        </div>
            
  
        
    </main>
  )
}

export default InicioBot
