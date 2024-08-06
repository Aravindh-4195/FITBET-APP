import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/currentSub.css";
import { Link, useNavigate } from "react-router-dom";

function OrderHistory() {
  const user_id = localStorage.getItem("user_id");
  const [reg, setId] = useState([]);
  const [orders, setOrders] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the current subscriptions
        const response = await axios.post(
          "http://localhost:8000/user/orderHistory",
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
          "http://localhost:8000/user/orderHistory",
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
    // console.log();
  }, [user_id]); // Dependency added to useEffect to re-run when user_id changes

  // handle feedBack
  const handleFeedback = () => {
    history("/user/feedback");
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
          You are not ordered anything till now!
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
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;
