import React, { useEffect, useState } from "react";
import "./styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [phone, setUsername] = useState();
  const [password, setPassword] = useState("");
  const history = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    // console.log(phone, password);
    const formdata = { phone: phone, password: password };
    try {
      await axios
        .post("https://fitbet-app-api.vercel.app/login", formdata)
        .then((res) => {
          if (res.data === "data found") {
            localStorage.setItem("user_id", phone);
            history("/gym/getGyms");

            // console.log(localStorage.getItem("profile"));
          } else if (res.data === "combo false") {
            alert("entered phone and password doesn't match");
          } else {
            alert("entered phone no doesnot exist.please signup");
          }
        })
        .catch((e) => {
          alert("unable to fetch");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <fieldset className="login_fieldset">
          <legend className="login_legend">Login</legend>
          <div className="input-group">
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
          <div className="input-group">
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
          <button type="submit" className="button-secondary">
            Login
          </button>
        </fieldset>
        <fieldset className="login_fieldset">
          <legend className="login_legend2"> Don't have an Account</legend>
          <a href="/register">
            <button type="button" className="button-secondary">
              Register Here
            </button>
          </a>
        </fieldset>
      </form>
    </div>
  );
};
