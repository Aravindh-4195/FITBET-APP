import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/gymDash.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import Dashboard from "../dasboard";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";

function GymDash() {
  const Location = useLocation();
  const city = Location.state?.city;
  // localStorage.setItem(city, city);
  // console.log(localStorage.getItem(city));
  // console.log(id);
  const history = useNavigate();
  const [gyms, gymSet] = useState(null);
  const [user_id, setId] = useState(localStorage.getItem("user_id") || "");
  const [rating, setRating] = useState([]);
  const [citys, setCitys] = useState([]);
  // console.log("gym" + city);
  const colors = {
    orange: "#000",
    grey: "a9a9a9",
  };
  useEffect(() => {
    if (user_id) {
      handleOnLoad();
      getGyms();
    } else {
      alert("please log in");
      history("/login");
    }
    console.log(rating);
  }, [city]);

  const handleOnLoad = async (event) => {
    try {
      const result = await axios.get("http://localhost:8000/search");
      setCitys(result.data.data); // Assuming your server returns an array of city names
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error gracefully, e.g., show an error message to the user
    }
  };
  const getGyms = async () => {
    try {
      if (localStorage.getItem("user_id") === undefined) {
        history("/login");
      }
      // console.log(localStorage.getItem(city));
      const result = await axios.post("http://localhost:8000/gym/getGyms", {
        city: city,
      });
      // console.log("hello");
      // console.log(result.data.data);
      console.log(result.data.rating);
      gymSet(result.data.data);
      // console.log("hello");
      setRating(result.data.rating);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Dashboard city={citys} />
      {/* <Link to="/user" state={{ user_id: id }}>
        <FaRegCircleUser
          style={{
            color: "rgba(251, 228, 17, 255)",
            fontSize: "5vw",
            position: "fixed",
            right: "5px",
            top: "10px",
            textDecoration: "none",
          }}
        />
        <h1 style={{ position: "fixed", color: "rgba(251, 228, 17, 255)" }}>
          personal trainers
        </h1>
      </Link> */}

      <div className="gym_cards">
        {gyms == null
          ? ""
          : gyms.map((data, index) => {
              return (
                <Link to="/gym/gymCenter" state={{ data: data }} id="dash_link">
                  {/* <div>hello</div> */}
                  <div key={data.id} className="gym_card">
                    {data.photo && (
                      <img
                        src={require(`./uploads/${data.photo}`)}
                        alt="hello"
                        id="gym_dash_img"
                      />
                    )}
                    <div className="dash_gym_details">
                      <p>
                        <i
                          class="fa-solid fa-dumbbell"
                          style={{ color: "black" }}
                        ></i>
                        {data.centerName}
                      </p>
                      <p>
                        <i
                          class="fa-solid fa-location-dot"
                          style={{ color: "black" }}
                        ></i>
                        {data.city}
                      </p>
                      <div>
                        <div>
                          {rating.length > 0 ? (
                            <>
                              <p
                                style={{
                                  padding: "5px",
                                  margin: "2px",
                                  display: "inline",
                                  fontSize: "20px",
                                  backgroundColor: "black",
                                  color: "rgba(251, 228, 17, 255)",
                                  borderRadius: "5px",
                                  // textAlign: "center",
                                }}
                              >
                                {rating[index]}
                              </p>
                              {Array(5)
                                .fill()
                                .map((_, i) =>
                                  i + 1 < rating[index] &&
                                  i + 2 > rating[index] ? (
                                    <i
                                      className="fa-solid fa-star-half-stroke"
                                      style={{
                                        color: "#000",
                                        fontSize: "25px",
                                        margin: "0",
                                      }}
                                      key={i}
                                    ></i>
                                  ) : i + 1 <= rating[index] ? (
                                    <i
                                      className="fa-solid fa-star"
                                      style={{
                                        color: "#000",
                                        fontSize: "25px",
                                        margin: "0",
                                        // fontFamily: "monospace",
                                      }}
                                      key={i}
                                    ></i>
                                  ) : (
                                    <i
                                      className="fa-regular fa-star"
                                      style={{
                                        color: "#000000",
                                        fontSize: "25px",
                                        margin: "0",
                                      }}
                                      key={i}
                                    ></i>
                                  )
                                )}
                            </>
                          ) : (
                            <p>no Rating</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
export default GymDash;
