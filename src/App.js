import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import SliderComponent from "./components/SliderComponent";
import ContactIcons from "./components/Contact/ContactIcons";
import Home from "./components/HomePage/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <ContactIcons/>
    </BrowserRouter>
  );
};

export default App;
