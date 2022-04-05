import React from "react";

import Header from "../components/Pages/content/Header";
import About from "../components/Pages/content/About";
import Features from "../components/Pages/content/Features";
import Courses from "../components/Pages/content/Courses";
import Offer from "../components/Pages/content/Offer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Courses />
      <Offer />
    </>
  );
};

export default Home;
