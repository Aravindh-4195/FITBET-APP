import React from "react";
import NavBarUser from "./navBar";
import UserAccount from "./userAccount";
import { BrowserRouter as Route } from "react-router-dom";
function UserMain() {
  return (
    <div>
      <h1>hello</h1>
      <NavBarUser />
      {/* <Route path="/user/userAccount" element={<UserAccount />}></Route> */}
    </div>
  );
}
export default UserMain;
