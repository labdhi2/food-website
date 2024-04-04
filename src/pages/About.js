import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        "Step into our pizza paradise, where every slice tells a story of flavor and freshness. From our oven to your table, each pizza is crafted with passion and precision, using only the finest ingredients. Whether you're a fan of the classics or crave something adventurous, our menu offers a tantalizing array of options to satisfy every palate. Join us and savor the taste of tradition with a modern twist, creating moments that are as delightful as they are delicious."
        But our love for pizza goes beyond the plate. We're passionate about creating a warm and welcoming atmosphere for our guests, where friends and family can gather to share great food and create lasting memories. Our attentive staff is here to ensure your experience is nothing short of fantastic, whether you're dining in or taking out.

So come join us at our pizza haven, where every slice is a slice of happiness. We can't wait to serve you!"
        </p>
      </div>
    </div>
  );
}

export default About;
