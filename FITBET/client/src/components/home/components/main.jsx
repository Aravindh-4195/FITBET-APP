import React from "react";
import NavBar from "./NavBar";
import Home from "./home";
import About from "./about";
// import Gym from "./Gym";
// import Yoga from "./yoga";
// import Testimonials from "./testimonials";
import Review from "./review";
import Footer from "./footer";
// import Panner from "./panner";
import ChooseUs from "./chooseUs";
import BMI from "./bmi";
import "../styles/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Main1() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      id="main_block"
    >
      <div
        style={{
          // backgroundColor: "red",
          width: "85%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <NavBar />
        {/* <div style={{ paddingTop: "10vh" }}></div> */}
        <Home />
        {/* <Gym /> */}
        {/* <Panner /> */}
        <ChooseUs />
        <About />
        {/* <Yoga />
      <Testimonials /> */}
        {/* <Review /> */}
        <Review />
        <BMI />
        <Footer />
        <div>
          <i
            class="fa-solid fa-circle-up"
            style={{
              color: "white",
              position: "fixed",
              zIndex: "2",
              fontSize: "10vw",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
export default Main1;
