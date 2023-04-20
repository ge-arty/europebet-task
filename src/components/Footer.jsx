import React from "react";
import "./Footer.css";
import arrowDown from "../assets/Vector Smart Object copy 22.png";
import promo1 from "../assets/Rounded Rectangle 595-2.png";
import promo2 from "../assets/Rounded Rectangle 595.png";
import promo3 from "../assets/Rounded Rectangle 595-1.png";
import promo4 from "../assets/Rounded Rectangle 595-2.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="rules-section">
        <h2>წესები და პირობები</h2>
        <div className="rules-box">
          <div className="rule">
            <p>როდის იწყება და რა ფორმატით გაიმართება აქცია</p>
            <img
              src={arrowDown}
              alt="arrow-down"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="rule">
            <p>როგორ მივიღო აქციაში მონაწილეობა?</p>
            <img
              src={arrowDown}
              alt="arrow-down"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="rule">
            <p>სხვადასვა</p>
            <img
              src={arrowDown}
              alt="arrow-down"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </section>
      <section className="promotions-section">
        <h2>მსგავსი აქციები</h2>
        <div className="promotion-pictures">
          <img className="promotion-pic" src={promo1} alt="promo-pic" />
          <img className="promotion-pic" src={promo2} alt="promo-pic" />
          <img className="promotion-pic" src={promo3} alt="promo-pic" />
          <img className="promotion-pic" src={promo4} alt="promo-pic" />
        </div>
      </section>
    </div>
  );
}
