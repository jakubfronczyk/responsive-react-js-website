import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Find from "./components/find/Find.js";
import Driver from "./components/driver/Driver.js";
import Luxury from "./components/luxury/Luxury.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </>
  );
}

export default App;
