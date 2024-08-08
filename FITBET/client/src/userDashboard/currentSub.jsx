import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/currentSub.css";
import { Link, useNavigate } from "react-router-dom";

function Subscription() {
  const user_id = localStorage.getItem("user_id");
  const [reg, setId] = useState([]);
  const [orders, setOrders] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the current subscriptions
        const response = await axios.post(
          "https://fitbet-app-api.vercel.app/user/currentSubscriptions",
          {
            user_id: user_id,
            getReg: true,
          }
        );
        const subscriptions = response.data.data;
        setId(subscriptions);
        // Extract product_ids from subscriptions
        const productIds = subscriptions.map(
          (subscription) => subscription.product_id
        );

        // Fetch details of the subscriptions

        // console.log(productIds);
        const orderResponse = await axios.post(
          "http://localhost:8000/user/currentSubscriptions",
          {
            product_id: productIds,
            getReg: false,
          }
        );

        // Set the fetched orders data
        setOrders(orderResponse.data.data);
        // console.log(orderResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log(orders.length);
  }, [user_id]); // Dependency added to useEffect to re-run when user_id changes

  // handle feedBack
  const handleFeedback = () => {
    history("/user/feedback");
  };

  // handle cancellation of subscription
  const handleCancellation = async (product_id) => {
    const result = window.confirm(
      "Do you want to proceed cancellation of subscription?"
    );
    if (result) {
      // User clicked "OK" (yes)
      try {
        const result = await axios.post(
          "http://localhost:8000/user/subscriptionCancel",
          {
            user_id: user_id,
            product_id: product_id,
          }
        );
        if (result.data.data === "success") {
          // history("/user/currentSubscriptions");
          alert("successfully cancelled subscription");
        } else {
          alert("try again");
        }
      } catch (e) {
        alert("unable to connect to the server");
      }
    }
  };

  return (
    <div>
      {orders.length === 0 ? (
        <p
          style={{
            color: "yellow",
            position: "absolute",
            left: "45vw",
            top: "40vh",
            fontSize: "2vw",
            fontFamily: "monospace",
          }}
        >
          Currently there are no Subscriptions for you!
        </p>
      ) : (
        orders.map((order, index) => (
          <div
            style={{
              margin: "4vh",
              // border: "2px solid rgba(251, 228, 17, 255)",
              // padding: "5px",
            }}
          >
            <Link
              to={
                order.profile === "gym" ? "/gym/gymCenter" : "/trainer/trainer"
              }
              state={{ data: order.get_data }}
              style={{ textDecoration: "none" }}
            >
              <div key={index} className="order-container">
                <div style={{ width: "20%", height: "90%" }}>
                  <img
                    src={
                      order.get_data.photo
                        ? order.profile === "gym"
                          ? require(`../components/gymCenter/uploads/${order.get_data.photo}`)
                          : require(`../components/trainer/uploads/${order.get_data.photo}`)
                        : ""
                    }
                    alt="img"
                    className="order-image"
                  />
                </div>
                {/* Render other order details here */}
                <div className="orderDetails">
                  <p className="centerName">
                    {order.profile === "gym"
                      ? order.get_data.centerName
                      : order.get_data.name}
                  </p>
                  <p className="location">{order.get_data.city}</p>
                </div>
                <div className="bookedInfo">
                  {/* <p className="ordertimeStamp">Ordered TimeStamp</p>
                   */}
                  <p className="orderTimeStamp">Ordered TimeStamp</p>
                  <p className="orderTime">{reg[index].time}</p>
                  <p clasName="orderDate">{reg[index].date}</p>
                </div>
              </div>
            </Link>
            <div>
              <Link to="/user/feedback" state={{ data: order.get_data.phone }}>
                <button className="subBtn">Give Feedback</button>
              </Link>
              <br />
              <Link
                to="/user/currentSubscriptions"
                onClick={() => handleCancellation(order.get_data.phone)}
              >
                <button className="subBtn">Cancel Subscription</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Subscription;
