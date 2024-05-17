import React from 'react'
import NavbarLanding from '../../Components/HeaderComponent/NavbarLanding'
import './home.css'

const Home = () => {
  return (
    <>
    <NavbarLanding />
    <main id='home'>
      <h1>Aprender de finanzas nunca fue tan fácil</h1>
    </main>
    <section id= "aboutus">
        <h1>Conoce a Clara</h1>
    </section>
    <section id = "problem">
        <h1>Problemática</h1>
        
    </section>
    <section id = "benefits">
        <h1>Beneficios</h1>
    </section>
    </>
  )
}

export default Home
