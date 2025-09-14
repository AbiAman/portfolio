import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import Project2 from "../Project/Project2";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Project2 />
      <Skills />
      {/* <Reviews /> */}
      <Contact />
    </div>
  );
};

export default Home;
