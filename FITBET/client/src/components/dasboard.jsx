import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import "../styles/dashboard.css";

function Dashboard(props) {
  const citys = props.city;
  const [list, setList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(""); // State to store the selected city
  const [tab, setTab] = useState("");
  // console.log(tab);
  // useEffect(() => {
  //   setTab(tab);
  // }, [tab]);
  // console.log(citys);
  const handleOnChange = (event) => {
    const search = event.target.value.trim().toLowerCase();
    console.log(search);
    setSelectedCity(search);
    const uniqueCities = new Set();
    if (search.length !== 0)
      citys.forEach((city) => {
        const formattedCity = city
          .substring(0, search.length)
          .trim()
          .toLowerCase();
        const cityToAdd = city.trim();
        if (formattedCity.includes(search)) {
          uniqueCities.add(cityToAdd);
        }
      });

    setList(Array.from(uniqueCities));
  };

  const handleLinkClick = (tab, city) => {
    // console.log("handleClick");
    // console.log(tab);
    // console.log(city);
    setSelectedCity(city); // Update the selected city in state
    setList([]);
  };

  return (
    <div id="outerDashboard">
      <div id="dashboard">
        <div id="dashboardSearch">
          <input
            type="text"
            placeholder="search city"
            style={{
              backgroundColor: "black",
              textAlign: "center",
              height: "100%",
              color: "white",
              fontSize: "125%",
            }}
            onChange={handleOnChange}
            value={selectedCity} // Set the input value to the selected city
          />
        </div>

        <Link
          className="dashboardLink"
          to={`${tab}`}
          onClick={() => setTab("/trainer/getTrainers")}
        >
          Personal Trainers
        </Link>
        <Link
          className="dashboardLink"
          to={`${tab}`}
          onClick={() => setTab("/gym/getGyms")}
        >
          Gyms
        </Link>
        <Link className="dashboardLink" to="/user">
          <FaRegCircleUser id="userdashIcon" />
        </Link>
      </div>

      {list.length > 0 && (
        <div className="cityList">
          {list.map((city, index) => (
            <Link
              key={index}
              to={tab}
              style={{ textDecoration: "none" }}
              state={{ city: city }}
              onClick={() => handleLinkClick(tab, city)} // Call handleLinkClick on link click
            >
              <div className="city">{city.toUpperCase()}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
