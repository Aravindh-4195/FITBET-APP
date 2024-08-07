import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/userNav.css";
import { FaRegCircleUser } from "react-icons/fa6";
// Adjust the path accordingly

//  import userIcon from `../components/trainer/uploads/${pic}`;
function NavBarGym() {
  const [pic, setPic] = useState("");
  const handleLogOut = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("profile");
  };
  const profile = localStorage.getItem("profile");
  // console.log(localStorage.getItem("profile"));
  // const url = `url("C:/sampleproject/src/components/trainer/uploads/${pic}")`;
  // console.log(url);
  useEffect(() => {
    if (profile !== "gym") {
      handleOnLoad();
    }

    // console.log(pic);
    // console.log(`C:/sampleproject/src/components/trainer/uploads/${pic}`);
  });
  const handleOnLoad = async () => {
    try {
      const result = await axios.post("http://localhost:8000/bussiness/user", {
        phone: localStorage.getItem("user_id"),
        // profile: localStorage.getItem("profile"),
      });
      setPic(result.data.data.photo);
      // if (result.data.data)
      // console.log(result.data.data.photo);
    } catch (e) {
      alert("unable to connect to server");
    }
  };
  return (
    <div id="bussinessNav">
      <div className="userImg">
        {profile === "gym" ? (
          <FaRegCircleUser style={{ width: " 10vw", height: "10vw" }} />
        ) : pic === "" ? (
          ""
        ) : (
          <img
    src={require(`FITBET/client/src/components/trainer/uploads/${pic}`)}
    alt="profile-pic"
    style={{ width: "10vw", height: "10vw", borderRadius: "50%" }}
/>

        )}
      </div>
      <a
        href={
          localStorage.getItem("profile") === "gym"
            ? "/bussiness/gym/AccountDetails"
            : "/bussiness/trainer/AccountDetails"
        }
        className="navUserItem"
      >
        Account Details
      </a>
      <a href="/bussiness/currentSubscriptions" className="navUserItem">
        Current Subscriptions
      </a>
      <a href="#orders" className="navUserItem">
        Order History
      </a>
      <a href="/bussiness/contact" className="navUserItem">
        Customer Care
      </a>
      <a href="/bussiness" className="navUserItem" onClick={handleLogOut}>
        Logout
      </a>
      {/* <a href="/register" className="nav_item_user account">logout</a> */}
    </div>
  );
}
export default NavBarGym;
