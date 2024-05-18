import React from 'react'
import { questions } from './preguntas'
import './preguntas.css'

const Preguntas = (props) => {
  return (
    <div className='preguntas-container'>
      <h1>{props.description}</h1>
    </div>
  )
}

export default Preguntas
