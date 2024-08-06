import React from "react";

import Buss_NavBar from "./bussiness_navbar";
import Bussiness from "./bussiness_home";
import Buss_own from "./bussiness_own";
import Why from "./bussiness_why";
// import Buss_start from "./bussiness_start";
import Buss_presence from "./bussiness_presence";
import Buss_trainer from "./bussiness_trainer";
import Buss_form from "./bussiness_form";
import Buss_testi from "./bussiness_testi";
import Buss_news from "./bussiness_news";
import { useEffect } from "react";

function BussinessMain() {
  document.documentElement.style.scrollbarColor = "rgb(151, 203, 235) black";
  useEffect(() => {
    localStorage.removeItem("user_id");
  });
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          // backgroundColor: "red",
          width: "80%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Buss_NavBar />
        <Bussiness />
        <Buss_own />
        <Why />
        <Buss_trainer />
        <Buss_presence />

        {/* <Buss_form /> */}
        {/* <Buss_testi/> */}
        <Buss_news />
      </div>
    </div>
  );
}
export default BussinessMain;
