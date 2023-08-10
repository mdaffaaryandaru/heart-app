import React from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const addiction = require("../../component/addiction.png");
  const exercise = require("../../component/exercise.png");
  const food = require("../../component/food.png");
  const relation = require("../../component/relation.png");
  const rest = require("../../component/rest.png");
  const yoga = require("../../component/yoga.png");
  const redirect = useNavigate();

  return (
    <>
      <div className="TopBar">
        <div className="TopBar-Main">
          <h3>Life Style Medicine Questionaire</h3>
        </div>
      </div>
      <div className="Content">
        <div className="Content-Main1">
          <Link to="/Question">
            <div className="Content-1">
              <img src={food} alt="food" className="Picture" />
              <i>Food</i>
            </div>
          </Link>
          <Link to="/Question">
            <div className="Content-2">
              <img src={exercise} alt="exercise" className="Picture" />
              <i>Exercise</i>
            </div>
          </Link>
        </div>
        <div className="Content-Main2">
          <div className="Content-3">
            <img src={yoga} alt="yoga" className="Picture" />
            <i>Stress</i>
          </div>
          <div className="Content-4">
            <img src={rest} alt="rest" className="Picture" />
            <i>Rest</i>
          </div>
        </div>
        <div className="Content-Main3">
          <div className="Content-5">
            <img src={addiction} alt="addiction" className="Picture" />
            <i>Addiction</i>
          </div>
          <div className="Content-6">
            <img src={relation} alt="relation" className="Picture" />
            <i>Relation</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
