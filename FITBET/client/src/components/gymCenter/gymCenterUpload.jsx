import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/gymReg.css";
import axios from "axios";

function GymForm() {
  const [formData, setFormData] = useState({
    centerName: "",
    email: "",
    phone: "",
    // gender: "",
    timings: "",
    flat_no: "",
    landmark: "",
    street: "",
    city: "",
    navigate: "",
    password: "",
    confirmPassword: "",
    photo: null,
    beginner: false,
    intermediate: false,
    advanced: false,
  });
  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      await axios
        .post("https://fitbet-app-api.vercel.app/gym/registerGym", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data === "ok") {
            alert("succesfully inserted");
            history("/bussiness/login");
          } else {
            alert("unable to insert");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="gymRegistration">
      {/* <h2>Trainer Registration</h2> */}
      <form onSubmit={handleSubmit} id="registration-form">
        <fieldset className="gymFieldset">
          <legend className="gymLegend">Personal Information</legend>
          <div className="row">
            <div className="label-box">
              <label htmlFor="centerName">Center Full Name:</label>
            </div>
            <input
              type="text"
              id="centerName"
              name="centerName"
              value={formData.centerName}
              onChange={handleChange}
              placeholder="Enter center full name"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="email">Email:</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="phone">Phone Number:</label>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="password">Password:</label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="confirmPassword">Confirm Password:</label>
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter confirm password"
            />
          </div>
        </fieldset>
        <fieldset className="gymFieldset">
          <legend className="gymLegend">Detailed Address</legend>
          <div className="row">
            <div className="label-box">
              <label htmlFor="flat_no">Flat No:</label>
            </div>
            <input
              type="text"
              id="flat_no"
              name="flat_no"
              value={formData.flat_no}
              onChange={handleChange}
              placeholder="Enter your flat_no"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="landmark">Landmark:</label>
            </div>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              placeholder="near XYZ Building, ABC Road"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="street">Street:</label>
            </div>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Enter the street name"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="city">City:</label>
            </div>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter the City name"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="navigate">Location:</label>
            </div>
            <input
              type="url"
              id="navigate"
              name="navigate"
              value={formData.navigate}
              onChange={handleChange}
              placeholder="Google Map location link"
            />
          </div>
        </fieldset>

        <fieldset className="gymFieldset">
          <legend className="gymLegend">About Gym</legend>

          <div className="row">
            <div className="label-box">
              <label htmlFor="timings">Timings: </label>
            </div>
            <input
              type="text"
              id="timings"
              name="timings"
              value={formData.timings}
              onChange={handleChange}
              placeholder="timing in the format 12:00 AM  - 1:00 AM"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="Preference">Class Level Preference:</label>
            </div>
            <select
              id="Preference"
              name="Class Level Preference"
              value={formData.Preference}
              onChange={handleChange}
            >
              <option value="">
                Select the level of classes you are willing to teach
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor=" Upload Photo"> Upload Photo:</label>
            </div>
            <input
              type="file"
              accept="image/*"
              name="photo"
              id="photo"
              // value={formData.photo}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <button className="gymBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default GymForm;
