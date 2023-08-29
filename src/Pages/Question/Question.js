import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import "./Question.css";
import addiction from "../component/addiction.png";
import food from "../component/food.png";
import relation from "../component/relation.png";
import exercise from "../component/exercise.png";
import stress from "../component/yoga.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Next from "../component/next.png";
import Previous from "../component/prev.png";
import Rating from "@mui/material/Rating";

const Question = () => {
  const image = [food, exercise, stress, relation, addiction];
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const token = localStorage.getItem("token");
  const [tittleId, tittle] = useParams().tittle.split("-");
  const [page, setPage] = useState(1);
  const [answer, setPhoneNumber] = useState("");
  const redirect = useNavigate();
  const [result2, setResult2] = useState();

  useEffect(() => {
    const fetchUserData = () => {
      const token = localStorage.getItem("token");
      const url = `http://localhost:5000/api/question?type=pagination&page=${page}&limit=1&titleId=${tittleId}}`;

      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setResult(data.data);
          console.log(data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchUserData();
  }, [page]); // Dependensi array kosong
  useEffect(() => {
    const fetchUserData = (tittle) => {
      const token = localStorage.getItem("token");
      const url = `http://localhost:5000/api/title?tittile=${tittle}}`;

      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setResult2(data.data);
          // console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchUserData();
  }, []); // De

  const onClicknext = () => {
    console.log(result.metadata.totalPage);
    if (page <= result.metadata.totalPage) {
      setPage(page + 1);
      console.log(page);
    }
  };
  const handleSubmit = async (e, value, id) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/answer", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answer: value,
          questionId: id,
        }),
      });
      if (response.ok) {
        const data = await response.json();

        alert("Success");
      } else {
        setError("....");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const onClickprev = () => {
    if (page > 1) {
      setPage(page - 1);
    } else if (page < 1) {
      alert("silahkan mengisi");
    }
  };

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FFF000",
      marginLeft: "50px",
    },
    "& .MuiRating-iconEmpty": {
      marginLeft: "50px",
    },

    "& .MuiRating-iconHover": {
      color: "#FFF000",
    },
  });

  return (
    <>
      <div className="Body">
        <div className="TopBar">
          <div className="TopBar-Main">
            <h3>{tittle}</h3>
          </div>
        </div>
        <div className="Question-box">
          {result?.result?.map((item, index) => (
            <>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{item.question}</Card>
                <div className="stars">
                  <StyledRating
                    className="customized-10"
                    defaultValue={item?.answer?.answer || 0}
                    max={10}
                    precision={1}
                    size="large"
                    onChange={(e, value) => {
                      handleSubmit(e, value, item.id);
                      console.log(value);
                    }}
                  />
                </div>
              </Box>
            </>
          ))}
        </div>

        <div className="buttonSlide">
          <div className="buttonSlide-prev" onClick={onClickprev}>
            <img src={Previous} alt="Previous" className="picturePrev " />
          </div>
          <div className="buttonSlide-next" onClick={onClicknext}>
            <img src={Next} alt="Next" className="pictureNext" />
          </div>
        </div>

        <div className="BottomBar">
          {result2?.result?.map((item, index) => (
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
        </div>
      </div>
    </>
  );
};

export default Question;
