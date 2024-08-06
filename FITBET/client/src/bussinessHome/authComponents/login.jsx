import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BussinessLogin() {
  const [phone, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const formData = { phone: phone, password: password };

    try {
      const res = await axios.post(
        "http://localhost:8000/bussiness/login",
        formData
      );
      console.log(res.data.data);
      if (res.data.data === "exist") {
        localStorage.setItem("user_id", Number(phone));
        if (res.data.profile === "gym") {
          navigate("/bussiness/gym/AccountDetails");
          localStorage.setItem("profile", "gym");
        } else {
          navigate("/bussiness/trainer/AccountDetails");
          localStorage.setItem("profile", "trainer");
        }
      } else if (res.data.data === "does no exist") {
        alert("Entered phone and password do not match");
      } else {
        alert("Entered phone number does not exist. Please sign up");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Unable to fetch");
    }
  }

  return (
    <div className="bussinessLoginConatainer">
      <form className="login-form" onSubmit={handleLogin}>
        <fieldset className="gymLoginFieldset">
          <legend className="gym_login_legend">Login</legend>
          <div className="gymLoginInput">
            <label htmlFor="phone">Phone number:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div className="gymLoginInput">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
            />
          </div>
          <button type="submit" className="gymLoginBtn">
            Login
          </button>
        </fieldset>
        <fieldset className="gymLoginFieldset">
          <legend className="gym_login_legend"> Don't have an Account</legend>
          <a href="/gym/registerGym">
            <button type="button" className="gymLoginBtn">
              Register Here
            </button>
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default BussinessLogin;
