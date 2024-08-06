import React from "react";
// import Render from "./Render";
import "../styles/main.css";
import App from "./App";
import GymForm from "./gymCenter/gymCenterUpload";
import GymDash from "./gymCenter/gymCenterDash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gym from "./gymCenter/gymCenter";
import Main1 from "./home/components/main";
// import { Login } from "./authComponents/login";
import { Login } from "./authComponents/login";
import Register from "./authComponents/Register";
import Trainer from "./trainer/trainer";
import TrainerDash from "./trainer/trainerIndiviDash";
import TrainerForm from "./trainer/trainerRegistration";
import NavBarUser from "../userDashboard/navBar";
import UserAccount from "../userDashboard/userAccount";
import Dashboard from "./dasboard";
import Subscription from "../userDashboard/currentSub";
import OrderHistory from "../userDashboard/orderHistory";
import Contact from "../userDashboard/contact";
import BussinessLogin from "../bussinessHome/authComponents/login";
// import BussinessMain from "../bussinessHome/components/bussiness_main";
import BussinessMain from "../bussinessHome/components/bussiness_main";
import Search from "../components/search";
import Circular from "./circular";

// gym account dashboard

import GymAccount from "../bussinessHome/AccoutDashboard/userAccount";
import NavBarGym from "../bussinessHome/AccoutDashboard/navBar";
import GymSubscription from "../bussinessHome/AccoutDashboard/currentSub";
import GymContact from "../bussinessHome/AccoutDashboard/contact";
import TrainerAccount from "../bussinessHome/AccoutDashboard/trainerAccount";
import FeedBack from "../userDashboard/feedback";
// import Review from "./review";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/circular" element={<Circular />}></Route>
        {/*search route */}
        <Route path="/search" element={<Search />}></Route>
        {/* <Route path="/render" element={<Render></Render>}></Route> */}
        <Route path="/user/feedback" element={<FeedBack />}></Route>
        <Route path="/upload" element={<App />}></Route>
        <Route path="/gym/registerGym" element={<GymForm />}></Route>
        <Route path="/gym/getGyms" element={<GymDash />}></Route>
        <Route path="/gym/gymCenter" element={<Gym />}></Route>
        {/* <Route path="/gym/review" element={<Review />}></Route> */}
        <Route path="/" element={<Main1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* trainer tags */}
        <Route path="/trainer/trainer" element={<Trainer />} />
        <Route path="/trainer/getTrainers" element={<TrainerDash />} />
        <Route path="/trainer/trainerReg" element={<TrainerForm />} />
        <Route path="/bussiness/login" element={<BussinessLogin />} />
        {/* user dashboard */}
        <Route
          path="/user"
          element={
            <div className="userDash">
              <div className="userNav">
                <NavBarUser />
              </div>
              <div className="userPart">
                <UserAccount />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/user/currentSubscriptions"
          element={
            <div className="userDash">
              <div className="userNav">
                <NavBarUser />
              </div>
              <div className="userPart">
                <Subscription />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/user/contact"
          element={
            <div>
              <div className="userDash">
                <div className="userNav">
                  <NavBarUser />
                </div>
                <div className="userPart contact">
                  <Contact />
                </div>
              </div>
            </div>
          }
        ></Route>
        <Route path="/bussiness" element={<BussinessMain />} />

        {/* gym Account */}
        <Route
          path="/bussiness/gym/AccountDetails"
          element={
            <div className="userDash">
              <div className="userNav">
                <NavBarGym />
              </div>
              <div className="userPart">
                <GymAccount />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/bussiness/currentSubscriptions"
          element={
            <div className="userDash">
              <div className="userNav">
                <NavBarGym />
              </div>
              <div className="userPart">
                <GymSubscription />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/bussiness/contact"
          element={
            <div>
              <div className="userDash">
                <div className="userNav">
                  <NavBarGym />
                </div>
                <div className="userPart contact">
                  <GymContact />
                </div>
              </div>
            </div>
          }
        ></Route>

        {/* trainer details */}
        <Route
          path="bussiness/trainer/AccountDetails"
          element={
            <div className="userDash">
              <div className="userNav">
                <NavBarGym />
              </div>
              <div className="userPart">
                <TrainerAccount />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/bussiness/currentSubscriptions"
          element={
            <div className="userDash">
              <div className="userNav">
                <NavBarGym />
              </div>
              <div className="userPart">{/* <TrainerSubscription /> */}</div>
            </div>
          }
        ></Route>
        <Route
          path="/gym/contact"
          element={
            <div>
              <div className="userDash">
                <div className="userNav">
                  <NavBarGym />
                </div>
                <div className="userPart contact">
                  <GymContact />
                </div>
              </div>
            </div>
          }
        ></Route>

        <Route
          path="/user/orderHistory"
          element={
            <div className="userDash">
              <div className="userNav">
                <NavBarUser />
              </div>
              <div className="userPart">
                <OrderHistory />
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default Main;
