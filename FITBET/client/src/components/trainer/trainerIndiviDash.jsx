import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/trainerindiviDash.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "../dasboard";

function TrainerDash() {
  const Location = useLocation();
  const city = Location.state?.city;
  const history = useNavigate();

  console.log(city);
  const [user_id, setId] = useState(localStorage.getItem("user_id") || "");
  // console.log(user_id);
  const [gyms, gymSet] = useState(null);
  const [citys, setCitys] = useState([]);
  useEffect(() => {
    if (user_id) {
      handleOnLoad();
      getTrainers();
    } else {
      alert("please log in");
      history("/login");
    }
    // console.log(rating);
  }, [city]);

  const handleOnLoad = async () => {
    try {
      // console.log("hello");
      const result = await axios.get("http://localhost:8000/trainer/search");
      setCitys(result.data.data); // Assuming your server returns an array of city names
      // console.log(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error gracefully, e.g., show an error message to the user
    }
  };
  const getTrainers = async () => {
    try {
      const result = await axios.post(
        "http://localhost:8000/trainer/getTrainers",
        {
          city: city,
        }
      );
      gymSet(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Dashboard city={citys} />
      <div className="gym_cards">
        {gyms == null
          ? ""
          : gyms.map((data) => {
              return (
                <Link
                  to="/trainer/trainer"
                  state={{ data: data }}
                  id="dash_link"
                >
                  <div key={data.id} className="gym_card">
                    {data.photo && (
                      <img
                        src={require(`./uploads/${data.photo}`)}
                        alt="hello"
                        id="gym_dash_img"
                      />
                    )}
                    <div id="dash_gym_details">
                      <p>
                        <i
                          class="fa-solid fa-dumbbell"
                          style={{ color: "black" }}
                        ></i>
                        {data.name}
                      </p>
                      <p>
                        <i
                          class="fa-solid fa-location-dot"
                          style={{ color: "black" }}
                        ></i>
                        {data.city}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
export default TrainerDash;
