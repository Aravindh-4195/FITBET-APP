import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/currentSub.css";

function GymSubscription() {
  const user_id = localStorage.getItem("user_id");
  const [reg, setId] = useState([]);
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState(localStorage.getItem("profile") || "");

  useEffect(() => {
    // console.log(user_id);
    // setProfile(localStorage.getItem("profile"));
    const fetchData = async () => {
      try {
        // Fetch the current subscriptions
        // if (profile === "gym") {
        var response = await axios.post(
          "https://fitbet-app-api.vercel.app/bussiness/currentSubscriptions",
          {
            user_id: user_id,
            profile: profile,
            getReg: true,
          }
        );

        const subscriptions = response.data.data;
        // console.log(subscriptions);
        setId(subscriptions);
        // Extract product_ids from subscriptions
        const productIds = subscriptions.map(
          (subscription) => subscription.user_id
        );

        // Fetch details of the subscriptions

        console.log(productIds);
        const orderResponse = await axios.post(
          "https://fitbet-app-api.vercel.app/bussiness/currentSubscriptions",
          {
            user_id: productIds,
            getReg: false,
          }
        );

        // Set the fetched orders data
        setOrders(orderResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // console.log();
    console.log(orders);
  }, [user_id, profile, orders]); // Dependency added to useEffect to re-run when user_id changes

  return (
    <div>
      {orders.map((order, index) => (
        <div key={index} className="userOrderContainer">
          {/* <div style={{ width: "20%", height: "90%" }}>
            <img
              src={
                order.photo
                  ? require(`C:/sampleproject/src/components/gymCenter/uploads/${order.photo}`)
                  : ""
              }
              alt="img"
              className="order-image"
            />
          </div> */}
          {/* Render other order details here */}
          <div className="orderDetails">
            <p className="centerName">{order.name}</p>
            <p className="location">{order.city}</p>
          </div>
          <div className="bookedInfo">
            {" "}
            {/* <p className="ordertimeStamp">Ordered TimeStamp</p> */}
            <p className="orderTimeStamp">Ordered TimeStamp</p>
            <p className="orderTime">{reg[index].time}</p>
            <p clasName="orderDate">{reg[index].date}</p>
          </div>
        </div>
      ))}
    </div>
    // <div></div>
  );
}

export default GymSubscription;
