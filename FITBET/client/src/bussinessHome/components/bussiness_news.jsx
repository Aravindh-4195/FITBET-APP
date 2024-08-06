import React from "react";
import "../styles/bussiness_news.css";
function Buss_news() {
  return (
    <div id="bussinessContact">
      <div className="news_container">
        <div className="news_block1">
          <h1 className="news_h1">Sign up for our newsletter</h1>
          <p className="news_p">
            Stay on top of all news and updates regarding FetBet bussiness
          </p>
        </div>
        <div className="block1">
          <label className="news_label" htmlFor="email">
            EMAIL:
          </label>
          <input
            type="email"
            id="news_email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button className="news_btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
export default Buss_news;
