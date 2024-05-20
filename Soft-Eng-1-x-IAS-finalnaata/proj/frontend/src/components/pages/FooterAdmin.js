import React, { useState } from "react";
import "./FooterAdmin.css";
import { Link } from "react-router-dom";

function FooterAdmin() {
  const [email, setEmail] = useState(""); // State to manage the value of the email input
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribeClick = (e) => {
    e.preventDefault();
    setShowModal(true);
    setEmail("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              St. John's PharmAssist
              <i className="fab fa-react"></i>
            </Link>
          </div>
          <small class="website-rights">St. John's PharmAssist © 2023</small>

          {/* DELETE THIS */}
          {/* <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div> */}
          {/* END */}
        </div>
      </section>
     </div> 
  );
}

export default FooterAdmin;