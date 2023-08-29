import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

import addiction from "../../component/addiction.png";
import food from "../../component/food.png";
import stress from "../../component/yoga.png";
import rest from "../../component/rest.png";
import relation from "../../component/relation.png";
import exercise from "../../component/exercise.png";

const Dashboard = () => {
  const [result, setResult] = useState(null);
  const image = [food, exercise, stress, rest, relation, addiction];

  useEffect(() => {
    const fetchUserData = (tittle) => {
      const token = localStorage.getItem("token");
      const url = `http://localhost:5000/api/title?tittle=${tittle}}`;

      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setResult(data.data);
          // console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchUserData();
  }, []); // De
  console.log(result);

  return (
    <>
      <div className="TopBar">
        <div className="TopBar-Main">
          <h3>Life Style Medicine Questionaire</h3>
        </div>
      </div>
      <div className="Content">
        <div className="Content-Main1">
          {result?.result?.map((item, index) => (
            <Link to={`/Question/${item.id}-${item.name}`}>
              <div className="Content-1">
                <img
                  src={image[index % image.length]}
                  alt="image"
                  className="Picture"
                />
                <i>{item.name}</i>
              </div>
            </Link>
          ))}
          {/*  <Link to="/Question">*/}
          {/*    <div className="Content-1">*/}
          {/*      <img src={food} alt="food" className="Picture" />*/}
          {/*      <i>Food</i>*/}
          {/*    </div>*/}
          {/*  </Link>*/}
          {/*  <Link to="/Question">*/}
          {/*    <div className="Content-2">*/}
          {/*      <img src={exercise} alt="exercise" className="Picture" />*/}
          {/*      <i>Exercise</i>*/}
          {/*    </div>*/}
          {/*  </Link>*/}
          {/*</div>*/}
          {/*<div className="Content-Main2">*/}
          {/*  <div className="Content-3">*/}
          {/*    <img src={yoga} alt="yoga" className="Picture" />*/}
          {/*    <i>Stress</i>*/}
          {/*  </div>*/}
          {/*  <div className="Content-4">*/}
          {/*    <img src={rest} alt="rest" className="Picture" />*/}
          {/*    <i>Rest</i>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="Content-Main3">*/}
          {/*  <div className="Content-5">*/}
          {/*    <img src={addiction} alt="addiction" className="Picture" />*/}
          {/*    <i>Addiction</i>*/}
          {/*  </div>*/}
          {/*  <div className="Content-6">*/}
          {/*    <img src={relation} alt="relation" className="Picture" />*/}
          {/*    <i>Relation</i>*/}
          {/*  </div>*/}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
