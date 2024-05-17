import React from "react";
import NavbarLanding from "../../Components/HeaderComponent/NavbarLanding";
import "./home.css";
import MainContainer from "../../Containers/MainContainer.jsx";
import  Aboutus from "../../Containers/Aboutus.jsx";
import Problem from "../../Containers/Problem.jsx";
import Benefits from "../../Containers/Benefits.jsx"

const Home = () => {
  return (
    <>
      <NavbarLanding />
      <main id="home" className="mainContainer">
        <MainContainer/>
      </main>

      <section id="aboutus" className="about-us">
        <Aboutus/>
      </section>

      <section id="problem" className="problem">
        <Problem/>
      </section>

      <section id="benefits" className="benefits">
        <Benefits/>
      </section>
    </>
  );
};

export default Home;
