import { React } from "react";
import "../styles/about.css";
function About() {
  return (
    <div id="about">
      <div id="main_about">
        {/* <section className="container2"> */}
        {/* <h2 className="ourclass">About</h2> */}
        <div className="about_head">
          <p className="para">
            Welcome to our peaceful retreat, focused on caring for your body and
            mind. Here at <span className="span_about">FitConnect</span>, we are
            passionate about empowering individuals to achieve holistic wellness
            through the transformative practices of yoga and fitness. Our expert
            instructors guide you on a journey of self-discovery, helping you
            cultivate strength, flexibility, and inner peace. Whether you're a
            seasoned yogi or new to the world of fitness, our inclusive
            community offers a supportive environment where you can thrive. Join
            us as we unite breath, movement, and mindfulness to create harmony
            within and without. Experience the essence of well-being with{" "}
            <span className="span_about">FitConnect</span>."
          </p>
        </div>
        <div className="aboutimage"></div>
        {/* </section> */}
      </div>
      {/* <hr class="hr"></hr> */}
    </div>
  );
}
export default About;
