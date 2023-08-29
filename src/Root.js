import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Question from "./Pages/Question/Question";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Question/:tittle" element={<Question />} />
      </Routes>
    </Router>
  );
};

export default Root;
