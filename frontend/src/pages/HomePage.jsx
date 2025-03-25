import React from "react";
import { Link } from "react-router-dom";
// import "./HomePage.css"; // Assuming you have a CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Greeting Card Designer</h1>
      <p>
        Create and customize your own digital greeting cards for any occasion!
      </p>
      <Link to="/card" className="btn">
        Get Started
      </Link>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>Choose from a variety of fonts and sizes</li>
          <li>Select and manipulate SVG graphics</li>
          <li>Preview your card before purchasing</li>
          <li>Secure payment processing with Stripe</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
