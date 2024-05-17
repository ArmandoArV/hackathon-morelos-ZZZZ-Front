import React from "react";
import NavbarLanding from "../../Components/HeaderComponent/NavbarLanding";
import "./home.css";
import MainContainer from "../../Containers/MainContainer";

const Home = () => {
  return (
    <>
      <NavbarLanding />
      <main id="home" className="mainContainer">
        <MainContainer/>
      </main>

      <section id="aboutus">
        <h1>Conoce a Clara</h1>
      </section>
      <section id="problem">
        <h1>Problemática</h1>
      </section>
      <section id="benefits">
        <h1>Beneficios</h1>
      </section>
    </>
  );
};

export default Home;
