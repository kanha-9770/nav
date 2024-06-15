import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero/>
    </BrowserRouter>
  );
};

export default App;
