import React from "react";
import "./Food.css";

const Food = () => {
  const addiction = require("../../../component/addiction.png");
  const exercise = require("../../../component/exercise.png");
  const food = require("../../../component/food.png");
  const relation = require("../../../component/relation.png");
  const rest = require("../../../component/rest.png");
  const yoga = require("../../../component/yoga.png");

  return (
    <>
      <div className="Body">
        <div className="TopBar">
          <div className="TopBar-Main">
            <h3>Food</h3>
          </div>
        </div>
        <div className="BottomBar">
          <img src={food} alt="food" className="pictureBot" />
          <img src={exercise} alt="exercise" className="pictureBot" />
          <img src={yoga} alt="yoga" className="pictureBot" />
          <img src={rest} alt="rest" className="pictureBot" />
          <img src={addiction} alt="addiction" className="pictureBot" />
          <img src={relation} alt="relation" className="pictureBot" />
        </div>
      </div>
    </>
  );
};

export default Food;
