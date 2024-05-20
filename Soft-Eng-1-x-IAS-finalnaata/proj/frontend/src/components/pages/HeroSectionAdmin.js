import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "./HeroSectionAdmin.css";

function HeroSectionAdmin() {
  return (
    <div className="hero-container">
      <video src="/videos/doc1.mp4" autoPlay loop muted />
      <h1>Welcome to St. John's PharmAssist!</h1>
      <p>We're always ready to assist!</p>
      <div className="hero-btns">

        <Button
          to="/products"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => console.log("hey")}
        >
          ENTER DATABASE <i className="fas fa-capsules" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionAdmin;