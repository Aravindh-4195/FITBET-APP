import React from "react";
import "../styles/bussiness_form.css";
function Buss_form() {
  return (
    
   <div id="buss_form">
    <div className="form_container">
      <div className="form_block1">
    <h1 className="form_h1">Interested in becoming a FitBet partner?</h1>
    <p className="form_p">Please fill the following form if you are interested in partnering with us.</p>
    <form>
      <label className="form_label" htmlFor="name">NAME:</label>
      <input type="text" id="form_name" name="name" required />
      
      <label className="form_label"  htmlFor="email">EMAIL:</label>
      <input type="email" id="form_email" name="email" required />
      
      <label className="form_label" htmlFor="phone">PHONE NUMBER:</label>
      <input type="tel" id="form_phone" name="phone" required />
      
      <label className="form_label" htmlFor="city">CITY INTERESTED IN:</label>

      <select id="form_city" name="city" required>
        <option value="">Select one...</option>
        <option value="gym">Vizag</option>
        <option value="gym">Vijayawada</option>
        <option value="gym">Hyderabad</option>
      </select>
      <label className="form_label" htmlFor="gym name">GYM NAME(for existing gym owners)</label>
      <input type="text" id="form_name" name="gym name"  />
      <label className="form_label" htmlFor="message">MESSAGE:</label>
      <textarea id="form_message" name="message" rows="4" required></textarea>
      
      <button  className="form_btn" type="submit">Submit</button>
      
    </form>
    </div>
    <div className="form_block2">
      
    </div>
  </div>
  </div> 
);
}
export default Buss_form;
