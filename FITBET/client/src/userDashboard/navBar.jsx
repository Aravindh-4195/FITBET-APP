import React from "react";
import "./styles/userNav.css";
import { FaRegCircleUser } from "react-icons/fa6";
// import
function NavBarUser() {
  const handleLogOut = () => {
    localStorage.setItem("user_id", "");
  };
  return (
    <div id="UserNav">
      <div id="userIcon">
        <FaRegCircleUser />
      </div>

      <a href="/user" className="navUserItem">
        Account Details
      </a>
      <a href="/user/currentSubscriptions" className="navUserItem">
        Current Subscriptions
      </a>
      <a href="/user/orderHistory" className="navUserItem">
        Order History
      </a>
      <a href="/user/contact" className="navUserItem">
        Customer Care
      </a>
      <a href="/" className="navUserItem" onClick={handleLogOut}>
        Logout
      </a>
      {/* <a href="/register" className="nav_item_user account">logout</a> */}
    </div>
  );
}
export default NavBarUser;
