import React from "react";
import "./Popup.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CashGames from "./CashGames";
import FinalStage from "./FinalStage";
import SpringGames from "./SpringGames";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

export default function Popup(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 800);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="popup-container">
      <div className="fixed-menu-box">
        <div className="fixed-menu-text">
          <h6>სლოტები</h6>
          <span>10 იანვარი - 12 მარტი</span>
        </div>
        <button onClick={() => props.close()} className="close-button">
          X
        </button>
      </div>
      <div className="mobile-menu">
        <img src={logo} alt="orange-icon" />
        <div>
          <button className="mobile-menu-btnup">Sign up</button>
          <button className="mobile-menu-btnin">Sign in</button>
        </div>
      </div>
      <Header isMobile={isMobile} />
      <Routes>
        <Route exact path="/" element={<CashGames />} />
        <Route
          path="/SpringSeries"
          element={<SpringGames isMobile={isMobile} />}
        />
        <Route
          path="/FinalStage"
          element={<FinalStage isMobile={isMobile} />}
        />
      </Routes>
      <Footer />
      <div className="start-game-container">
        <div></div>
        <button>ითამაშე</button>
      </div>
    </div>
  );
}
