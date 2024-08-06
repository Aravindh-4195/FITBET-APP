import React, { useState, useEffect } from "react";

function Circular() {
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setDeg((prevDeg) => prevDeg + 1); // Increment degree by 1 each time
    }, 1000); // Update every 10 milliseconds for smoother rotation

    // return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // Run this effect only once on component mount
  const color = {
    white: "#fff",
    none: "transparent",
  };
  return (
    <div>
      <div
        style={{
          width: "10vw",
          height: "10vw",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 255, 0.5)",
          position: "absolute",
          //   zIndex: "3",
          left: "5vw",
          top: "5vw",
        }}
      >
        <hr
          style={{
            position: "absolute",
            top: "4.60vw",
            width: "50%",
            left: "5vw",
          }}
        />
        <div
          style={{
            width: "9.75vw",
            height: "9.75vw",
            borderRadius: "50%",
            // backgroundColor: "rgba(0, 0, 255, 0.1)",
            // position: "absolute",
            // //   zIndex: "3",
            // left: "5vw",
            // top: "5vw",
            // borderRadius: "5px",
            transform: `rotate(${deg}deg)`,
            border: "0.25vw solid white",
            // borderBottomColor: "red",
            // borderTopColor: "red",
            // borderLeftColor: "red",
            // display: "flex",
            // // justifyContent: "left",
            // alignItems: "cent",
          }}
        >
          <hr style={{ width: "50%", top: "4.4vw", position: "absolute" }} />
        </div>

        {/* <div
          style={{
            width: "10vw",
            height: "5vw",
            // position: "fixed",
            zIndex: "-1",
            backgroundColor:
              deg % 360 >= 0 && deg % 360 < 180 ? color.white : color.none,
            // borderBottom: "1px solid white",
          }}
        ></div> */}
        {/* <div
          style={{
            width: "10vw",
            height: "5vw",
            // backgroundColor:
            //   deg % 360 >= 180 && deg % 360 < 360 ? color.white : color.none,
            // borderBottom: "1px solid white",
          }}
        ></div>
      </div>
      <div
        style={{
          width: "20vw",
          height: "20vw",
          //   backgroundColor: "red",
          transform: `rotate(${deg}deg)`, // Apply rotation using deg unit
          transition: "transform 0.1s ease-in-out", // Add smooth transition
        }}
      >
        <div
          style={{
            width: "20vw",
            height: "10vw",
            backgroundColor: "white",
            borderBottom: "1px solid white",
          }}
        ></div> */}
      </div>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "red",
          borderRadius: "150px 150px 0 0",
        }}
      ></div>
    </div>
  );
}

export default Circular;
