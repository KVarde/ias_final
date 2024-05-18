import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./SignUp.css"; // Ensure correct import path for other CSS

function SignUp() {
  const navigate = useNavigate(); // Hook to navigate between routes
  const [formData, setFormData] = useState({ username: "", password: "" });
  const recaptcha = useRef();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
      return;
    }

  try {
      const res = await axios.post("http://localhost:8082/signin", {
        username: formData.username,
        password: formData.password,
        captchaValue: captchaValue,
      });
      console.log(res.data);
      if (res.status === 200 && res.data.message === "Login successful") {
        // Redirect to admin page after successful login
        navigate("/Admin");
    } else {
        // Display error message to the user
        console.error("Invalid username or password");
        alert("Invalid username or password");
    }
  } catch (err) {
      console.error(err);
      // Handle error response here, e.g., display an error message
    }
  };

  const handleCancel = () => {
    navigate("/"); // Navigate to the home page on cancel
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the form data
  };

  return (
    <div className="login-form">
      <h2>Log In to Your Account</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group-username">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            required
          />
        </div>

        <div className="form-group-password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>

        <div className="button-group"> {/* Container for buttons */}
          <button
            className="cancelbutton"
            type="button"
            onClick={handleCancel} // Navigate to home on click
          >
            Cancel
          </button>
          <button
            className="loginbutton"
            type="submit" // Change to type "submit" to trigger form submission
          >
            Login
          </button>
        </div>

      <div className="recaptcha-container">
          <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} />
        </div>
      </form>
    </div>
  );
}

export default SignUp;