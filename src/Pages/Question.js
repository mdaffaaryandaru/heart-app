import React, { useState } from "react";
import "./Question.css";

const Question = () => {
  const addiction = require("../component/addiction.png");
  const exercise = require("../component/exercise.png");
  const food = require("../component/food.png");
  const relation = require("../component/relation.png");
  const rest = require("../component/rest.png");
  const yoga = require("../component/yoga.png");
  const [question, setUser] = useState("");
  const [tittleId, setTittleId] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const token = localStorage.getItem("token");

  // const fetchUserData = (question, tittleId) => {
  //   fetch(
  //     `http://localhost:5002/api/question=${question}&titleId=${tittleId}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Menggunakan token dalam header Authorization
  //       },
  //     },
  //   )
  //     .then((response) => response.json()
  //     .then((data) => {
  //       setResult(data);
  //       console.log(data);
  //     })
  //
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };
  // useEffect(() => {
  //   fetchUserData();
  // }, []);
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  //make get function with parameter question, tittleId, and endpoint http://localhost:5002/api/user
  //and call token in header from local storage
  const fetchUserData = (question, tittleId) => {
    fetch(
      `http://localhost:5002/api/question=${question}&titleId=${tittleId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Menggunakan token dalam header Authorization
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  //execute fetchUserData function

  return (
    <>
      <div className="Body">
        <div className="TopBar">
          <div className="TopBar-Main">
            <h3>Food</h3>
          </div>
        </div>
        <div className="BottomBar">
          <div className="BottomBar-Main1">
            <img src={food} alt="food" className="pictureBot" />
            <img src={exercise} alt="exercise" className="pictureBot" />
          </div>
          <div className="BottomBar-Main2">
            <img src={yoga} alt="yoga" className="pictureBot" />
            <img src={rest} alt="rest" className="pictureBot" />
          </div>
          <div className="BottomBar-Main3">
            <img src={addiction} alt="addiction" className="pictureBot" />
            <img src={relation} alt="relation" className="pictureBot" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
