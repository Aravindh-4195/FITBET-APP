// import React from "react";
// import "../styles/footer.css";
// function Footer() {
//   return (
//     <div id="footer">
//       <div className="footer_item"></div>
//       <div className="footer_item"></div>
//       <div className="footer_item"></div>
//       {/* <div className="footer_item"></div> */}
//     </div>
//   );
// }
// export default Footer;

import "../styles/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer coll_footer footer-padding">
        <div className="footer-links">
          <div className="footerlinksdiv">
            <h4>Links</h4>
            <a href="/bussiness" id="patner">
              <div>
                <p>patner with us</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>link2</p>
              </div>
            </a>
          </div>
          <div className="footerlinksdiv">
            <h4>Links</h4>
            <a href="">
              <div>
                <p>link1</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>link2</p>
              </div>
            </a>
          </div>
          <div className="footerlinksdiv">
            <h4>Links</h4>
            <a href="">
              <div>
                <p>link1</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>link2</p>
              </div>
            </a>
          </div>

          <div className="footerlinksdiv">
            <h4>Links</h4>
            <a href="">
              <div>
                <p>link1</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>link2</p>
              </div>
            </a>
          </div>

          <div className="footerlinksdiv">
            <h4>Follow us</h4>
            <div className="socialmedia">
              <FaFacebook size={30} color="#0f4b9b" />
              <FaTwitter size={30} color="#0f4b9b" style={{ marginLeft: 10 }} />
              <FaLinkedin
                size={30}
                color="#0f4b9b"
                style={{ marginLeft: 10 }}
              />
              <FaInstagram
                size={30}
                color="#0f4b9b"
                style={{ marginLeft: 10 }}
              />
            </div>
          </div>
        </div>
        <hr />

        {/** Em  {(new Date().getFullYear())}   (Ano Capturado dinâmicamente ) */}

        <div className="footer-below">
          <div className="footer-copyright">
            <p>
              {new Date().getFullYear()} All right reserved ---&gt;
              (developer-name).
            </p>
          </div>
          <div className="footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
