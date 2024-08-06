import React, { useState, useEffect } from "react";
import "./styles/userAccount.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TrainerAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    yofe: "",
    // certification: null,
    rep: "",
    specilization: [],
    timings: "",
    train_to: [],
    photo: null,
    password: "",
    confirmPassword: "",
    // beginner: false,
    // Intermediate: false,
    // Advanced: false,
    // sports_specic_training: false,
    // strength_training: false,
    // weight_loss: false,
  });

  const navigate = useNavigate();

  const [user_id, setId] = useState(localStorage.getItem("user_id") || "");
  const [profile, setProfile] = useState(localStorage.getItem("profile") || "");
  useEffect(() => {
    // setId(localStorage.getItem("user_id"));
    // console.log("userid", user_id);
    // setProfile(localStorage.getItem("profile"));
    if (user_id) {
      handleOnload();
    } else {
      alert("session expired please log in");
      navigate("/bussiness/login");
    }
  }, []);
  const handleOnload = async () => {
    try {
      const data = await axios.post(
        "http://localhost:8000/bussiness/trainer/AccountDetails",
        {
          user_id: user_id,
        }
      );
      //   console.log(data.data.data);

      setFormData(data.data.data);
      //   console.log(formData.centerName);
    } catch (e) {
      alert("unable to connect to server");
    }
  };

  const handleChange = (e) => {
    const { className, name, checked, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [className === "specilization" || className === "train_to"
        ? className
        : name]:
        type === "checkbox"
          ? className === "specilization"
            ? checked === true
              ? [...prevState.specilization, value]
              : [...prevState.specilization]
            : checked === true
            ? [...prevState.train_to, value]
            : [...prevState.specilization]
          : // ? id === "specilization"
          //   ? [...prevState.specilization, value] // Pushing value to specilization array
          //   : [...prevState.train_to, value] // Pushing value to train_to array
          type === "file"
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios
        .post("http://localhost:8000/trainer/trainerReg", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data === "inserted") {
            alert("succesfully inserted");
            navigate("/bussiness/login");
          } else if (res.data === "duplicate key") {
            alert("email or phone no already exists");
          } else {
            alert("unable to insert");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="trainerRegistration">
      {/* <h2>Trainer Registration</h2> */}
      <form onSubmit={handleSubmit} id="registration-form">
        <fieldset className="trainerField">
          <legend className="trainerLegend">Personal Information</legend>
          <div className="row">
            <div className="label-box">
              <label htmlFor="trainerName"> Full Name:</label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </div>

          <br />
          <div className="row">
            <div className="label-box">
              <label htmlFor="gender">Gender:</label>
            </div>

            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="female">Female</label>
          </div>
          <br />

          <div className="row">
            <div className="label-box">
              <label htmlFor="age">Age:</label>
            </div>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Your Age"
              min="20"
              max="70"
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
              <label htmlFor="city">City:</label>
            </div>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter the City"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="Password">Password:</label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter the Password"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="confirmPassword">
                {/* Confirm <Password></Password>: */}Confirm Password:
              </label>
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter password again to confirm"
            />
          </div>
        </fieldset>
        <fieldset className="trainerField">
          <legend className="trainerLegend">Profissional Details</legend>
          <div className="row">
            <div className="label-box">
              <label htmlFor="experience">Years Of Experience:</label>
            </div>
            <input
              type="text"
              id="yofe"
              name="yofe"
              value={formData.yofe}
              onChange={handleChange}
              placeholder="Enter the years of experience"
            />
          </div>
          {/* <div className="row">
            <div className="label-box">
              <label htmlFor="certificates">Certificates:</label>
            </div>
            <input
              type="file"
              id="certification"
              name="certification"
              value={formData.certification}
              onChange={handleChange}
              placeholder="Upload certificate"
            />
          </div> */}
          <br />
          <div className="row">
            <div className="label-box">
              <label htmlFor="REP">REP eligibity:</label>
            </div>

            <input
              type="radio"
              id="yes"
              name="rep"
              value="Yes"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="yes">Yes</label>
            <input
              type="radio"
              id="no"
              name="rep"
              value="No"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="no">No</label>
          </div>
          <br />
          <div className="row">
            <div className="label-box">
              <label htmlFor="Specilization">Specilization:</label>
            </div>
            <input
              type="checkbox"
              className="specilization"
              name="weight_loss"
              value="weight loss"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="strength_training">weight loss</label>

            <input
              type="checkbox"
              // id="strength_training"
              className="specilization"
              name="strength_training"
              value="strength_training"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="strength_training">Strength Traininig</label>

            <input
              type="checkbox"
              // id="sports-specific_training"
              className="specilization"
              name="sports_specic_training"
              value="sports_specic_training"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="sports-specific_training">Sports-specific</label>
          </div>
          <br />
        </fieldset>

        <fieldset className="trainerField">
          <legend className="trainerLegend">About Gym</legend>

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
          <br />
          <div className="row">
            <div className="label-box">
              <label htmlFor="train_to">Train to:</label>
            </div>
            <input
              type="checkbox"
              // id="beginner"
              className="train_to"
              name="beginner"
              value="Beginner"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="beginner">Beginner</label>

            <input
              type="checkbox"
              // id="Intermediate"
              className="train_to"
              name="Intermediate"
              value="Intermediate"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="Intermediate">Intermediate</label>

            <input
              type="checkbox"
              // id="Advanced"
              className="train_to"
              name="Advanced"
              value="Advanced"
              onChange={handleChange}
              style={{ margin: "0" }}
              // placeholder=""
            />
            <label for="Advanced">Advanced</label>
          </div>
          <br />

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
export default TrainerAccount;
