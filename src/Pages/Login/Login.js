import * as React from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const baseEndpoint = process.env.REACT_APP_DATABASE_URL;
  const [error, setError] = useState("");
  const redirect = useNavigate();

  const handleChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5002/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: phone }),
      });
      if (response.ok) {
        redirect("/Dashboard");
      } else {
        Error("....");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, ""); // Menghapus karakter non-angka
    setValue(numericValue);
  };

  function removeLeadingZero() {
    const inputElement = document.getElementById("inputNumber");
    var inputValue = inputElement.value;

    // Check if the input value starts with '0'
    if (inputValue.length > 1 && inputValue.charAt(0) === "0") {
      inputValue = inputValue.substring(1); // Remove the leading zero
      inputElement.value = inputValue; // Update the input field with the modified value
    }
  }

  return (
    <>
      <script
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      ></script>

      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Health App Survey</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <i className=""> +62 </i>
              <input
                type="text"
                placeholder="Phone Number"
                // value={value}
                onChange={handleChangePhone}
                pattern="[0-9]*"
                required
              ></input>
            </div>
            <div className="row button">
              <input type="submit" value="Login"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
