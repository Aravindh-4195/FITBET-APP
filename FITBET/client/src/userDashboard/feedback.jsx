import React, { useState } from "react";
import "./styles/feedback.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function FeedBack() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  const [formdata, setFormData] = useState({
    rating: null,
    detailed: "",
  });
  //   console.log(data);
  const handleOnChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sent_data = {
      user_id: Number(localStorage.getItem("user_id")),
      product_id: data,
      ...formdata,
    };
    try {
      const result = await axios.post(
        "http://localhost:8000/user/feedback",
        sent_data
      );

      if (result.data.data === "ok") {
        alert("Thanks for your feedback");
        navigate("/user");
      } else if (result.data.data === "already reviewed") {
        alert("you review is already taken!");
        navigate("/user");
      } else {
        alert("unable to take feedback");
      }
    } catch (e) {
      alert("unable to connect to server");
    }
  };
  return (
    <div id="feedbackBackground">
      <form className="feedbackContainer" onSubmit={handleSubmit}>
        <fieldset>
          <legend>FeedBack Form</legend>
          <div className="feedbackInput">
            <label htmlFor="rating">Rating:</label>
            <br />
            <input
              type="number"
              name="rating"
              id="rating"
              placeholder="Please provide the your Rating here out of 5"
              onChange={handleOnChange}
              value={formdata.rating}
              required="true"
              min={0}
              max={5}
              step={0.5}
            />
          </div>
          <div className="feedbackInput">
            <label htmlFor="detailed">Detailed:</label>
            <br />
            <textarea
              name="detailed"
              id="detailed"
              cols="30"
              rows="5"
              placeholder="Write your detailed review here"
              onChange={handleOnChange}
              value={formdata.detailed}
            ></textarea>
          </div>
          <input type="submit" name="submit" />
        </fieldset>
      </form>
    </div>
  );
}
export default FeedBack;
