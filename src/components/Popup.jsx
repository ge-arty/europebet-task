import React from "react";
import "./Popup.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function Popup() {
  return (
    <div className="popup-container">
      <div className="fixed-menu_box">
        <div className="fixed-menu_text">
          <h6>სლოტები</h6>
          <span>10 იანვარი - 12 მარტი</span>
        </div>
        <button className="close-button">X</button>
      </div>
      <Header />

      <Content />
      <Footer />
      <div className="start-game-container">
        <div></div>
        <button>ითამაშე</button>
      </div>
    </div>
  );
}
