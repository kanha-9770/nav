import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero";
import Home from "./components/Home/Home";
import SliderComponent from "./components/SliderComponent";
import ContactIcons from "./components/Contact/ContactIcons";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <div className="mt-40"></div> */}
      <Home/>
      {/* <SliderComponent/> */}
      <ContactIcons/>
    </BrowserRouter>
  );
};

export default App;
