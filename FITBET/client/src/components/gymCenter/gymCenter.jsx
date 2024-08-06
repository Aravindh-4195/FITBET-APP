import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../gymCenter/styles/gym.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { useEffect } from "react";
// import {}

function Gym(props) {
  const location = useLocation();
  const history = useNavigate();
  const [user_id, setId] = useState(localStorage.getItem("user_id") || "");
  const [reviews, setReviews] = useState([]);

  const { data } = location.state;
  useEffect(() => {
    handleFeedBack();
    // console.log(reviews);
  }, []);
  const handleFeedBack = async () => {
    const review_data = {
      product_id: data.phone,
    };
    console.log(review_data);
    try {
      const result = await axios.post(
        "http://localhost:8000/gym/reviews",
        review_data
      );
      setReviews(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const imageUrl = "../gymCenter/uploads/" + data.photo;
  // console.log(imageUrl);
  const fullAdd = data.street + " • " + data.city;
  const subAdd = data.flat_no + ", " + data.landmark;

  const handleBooking = async () => {
    const data_sent = {
      product_id: data.phone,
      user_id: user_id,
      reviewed: false,
      // review: false,
      // withCredentials: true,
    };
    // console.log(data_sent);

    try {
      await axios
        .post(
          "http://localhost:8000/gym/gymCenter",

          data_sent
        )
        .then((res) => {
          if (res.data === "already registered") {
            alert("Already Registered");
          } else if (res.data === "registered") {
            alert("succussfully Registered");
          }
        });
    } catch (e) {
      alert("unable to connect to the server");
    }
  };
  return (
    <div key={data.id} className="gym_main">
      <div className="gym_item">
        <img
          src={require(`../gymCenter/uploads/${data.photo}`)}
          alt={data.centerName}
          id="gymImg"
        />

        <Link
          to="/gym/getGyms"
          // state={{ user_id: id }}
          className="gymCenterAnchor"
        >
          <button className="gymCenterBtn">Go Back</button>
        </Link>

        <button className="gymCenterBtn" onClick={handleBooking}>
          Book Now
        </button>
      </div>
      <div className="gym_item" id="gym_details">
        <h1 id="centerName">
          <i
            class="fa-solid fa-dumbbell"
            style={{ color: "rgba(251, 228, 17, 255", marginRight: "5px" }}
          ></i>
          {data.centerName}
        </h1>
        <div id="gym_address">
          <div className="address_item" id="item1">
            <p>
              <i
                class="fa-solid fa-location-dot"
                style={{
                  color: "rgba(251, 228, 17, 255",
                  marginRight: "5px",
                  fontSize: "15px",
                }}
              ></i>
              {fullAdd}
            </p>
            <p id="subadd">{subAdd}</p>
          </div>
          <div className="address_item">
            <Link id="link" to={data.navigate} target="_blank">
              NAVIGATE
            </Link>
          </div>
        </div>
        <div id="gym_timing">
          <p>
            <i
              class="fa-solid fa-clock"
              style={{
                color: "rgba(251, 228, 17, 255",
                marginRight: "5px",
                fontSize: "15px",
              }}
            ></i>
            {data.timings}
          </p>
        </div>
        <div class="gym_contact">
          <div className="contact_item con_item">
            <p>
              <i
                class="fa-solid fa-headset"
                style={{
                  color: "rgba(251, 228, 17, 255",
                  marginRight: "5px",
                  fontSize: "15px",
                }}
              ></i>
              Have any Queries? <br />
              Contact Center for support.
            </p>
          </div>
          <div className="contact_item">
            <h3>{data.phone}</h3>
          </div>
        </div>
        <div class="gym_contact">
          <div className="contact_item con_item">
            <p>
              <i
                class="fa-solid fa-envelope"
                style={{
                  color: "rgba(251, 228, 17, 255",
                  marginRight: "5px",
                  fontSize: "15px",
                }}
              ></i>
              Want to ask detailed Query? <br />
              Please mail us.
            </p>
          </div>
          <div className="contact_item">
            <h3>{data.email}</h3>
          </div>
        </div>
        <div
          id="commentSection"
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            border: "2px solid rgba(251, 228, 17, 255)",
            borderRadius: "5px",
            padding: "5%",
            fontFamily: "monospace",
            fontSize: "1vw",
          }}
        >
          <table>
            <tbody style={{}}>
              {reviews.length === 0 ? (
                <p>No Reviews yet</p>
              ) : (
                reviews.map((data, index) => (
                  <tr key={index}>
                    <div
                      style={{
                        backgroundColor: "#292929",
                        color: "#c2c1c0",
                        padding: "5%",
                        margin: "1%",
                        width: "31vw",
                      }}
                    >
                      <p>
                        {" "}
                        <i
                          class="fa-solid fa-star"
                          style={{
                            color: "rgba(251, 228, 17, 255)",
                            margin: "0",

                            // fontFamily: "monospace",
                          }}
                        ></i>
                        {data.rating}
                      </p>
                      <p>{data.detailed}</p>
                      {/* <p>{data.user_id}</p> */}
                    </div>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Gym;
