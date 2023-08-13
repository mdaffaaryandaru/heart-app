import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Food from "./Pages/Question/Food/Food";
import Stress from "./Pages/Question/Stress/Stress";
import Exercise from "./Pages/Question/Exercise/Exercise";
import Question from "./Pages/Question";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route path="/Stress" element={<Stress />} />
        <Route path="/Question/:tittle" element={<Question />} />
      </Routes>
    </Router>
  );
};

export default Root;
