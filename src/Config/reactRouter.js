import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/home-screen";
import AboutScreen from "../Screens/about-screen";

export default function ReactRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<HomeScreen />} path="/" />
          <Route element={<AboutScreen />} path="/about" />
        </Routes>
      </Router>
    </>
  );
}
