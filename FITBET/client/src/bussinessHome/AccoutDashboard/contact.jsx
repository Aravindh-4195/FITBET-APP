// import React from "react";
import "./styles/contact.css";
function GymContact() {
  return (
    <div
      style={{
        width: "60vw",
        // heigth: "100vh",
        backgroundColor: "rgb(151, 203, 235)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "2vw",
          //   textAlign: "center",
        }}
      >
        <p className="contactItems">
          Having any queries? write the detail query in to mail.
          <br />
          <span>fitbet@gmail.com</span>
        </p>
        <p className="contactItems">
          Please contact the customer care here
          <br />
          <span>1-800-975-6905</span>
        </p>
      </div>
    </div>
  );
}
export default GymContact;
