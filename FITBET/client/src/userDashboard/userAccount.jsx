import React, { useEffect, useState } from "react";
// import "./styles/Register.css";
import "./styles/userAccount.css";
import axios from "axios";
import { userNavigate, useLocation, useNavigate } from "react-router-dom";

function UserAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    // timings: "",
    flat_no: "",
    landmark: "",
    street: "",
    city: "",
    navigate: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });
  const [id, setId] = useState(localStorage.getItem("user_id") || "");
  const history = useNavigate();
  const location = useLocation();
  // const user_id = location.state?.user_id;
  // console.log(user_id);
  const user = { phone: Number(id), output: true };
  useEffect(() => {
    // localStorage.setItem("user_id", id);
    // console.log("localStorage", localStorage.getItem("user_id"));
    if (id) {
      handleOnload();
    } else {
      alert("session expires please login");
      history("/login");
    }
  }, []);

  const handleOnload = async () => {
    console.log("user", id);
    setId(id);
    if (id === undefined) {
      history("/login");
    }
    try {
      const data = await axios.post("http://localhost:8000/user", user);
      // console.log(data);
      setFormData(data.data.data);
      console.log(formData.name);
    } catch (e) {
      alert("unable to connect to server");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    const data_insert = { formData, phone: Number(id), output: false };
    console.log(data_insert);
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      try {
        await axios
          .post("http://localhost:8000/user", data_insert)
          .then((res) => {
            // alert(res.data);
            if (res.data === "ok") {
              alert("succesfully inserted");
            } else if (res.data === "Duplicate key error") {
              alert("email or phone Number already exist");
            } else {
              alert("unable to insert please check the connection");
            }
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("password and confirm password are not same");
    }
    // console.log(formData);
  };

  return (
    <div id="userDashAccount">
      {/* <h2>Trainer Registration</h2> */}
      <form onSubmit={handleSubmit} id="registrationForm">
        <fieldset className="user_fieldset">
          <legend className="user_legend">Personal Information</legend>
          <div className="row">
            <div className="label-box">
              <label htmlFor="name">Full Name:</label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              disabled="true"
              style={{ cursor: "pointer" }}
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
              disabled="true"
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* <div className="row">
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
          </div> */}

          <div className="row">
            <div className="label-box">
              <label htmlFor="password">password: </label>
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
              <label htmlFor="confirm password">comfirm password: </label>
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter Confirm Password"
            />
          </div>

          <div className="row">
            <div className="label-box">
              <label htmlFor="gender">gender:</label>
            </div>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled="true"
              style={{ cursor: "pointer" }}
            >
              <option value="">Select gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="user_fieldset">
          <legend className="user_legend">Detailed Address</legend>
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

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default UserAccount;
