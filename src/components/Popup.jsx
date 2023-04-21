import React from "react";
import "./Popup.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CashGames from "./CashGames";
import FinalStage from "./FinalStage";
import SpringGames from "./SpringGames";

export default function Popup() {
  return (
    <div className="popup-container">
      <div className="fixed-menu-box">
        <div className="fixed-menu-text">
          <h6>სლოტები</h6>
          <span>10 იანვარი - 12 მარტი</span>
        </div>
        <button className="close-button">X</button>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<CashGames />} />
        <Route path="/SpringSeries" element={<SpringGames />} />
        <Route path="/FinalStage" element={<FinalStage />} />
      </Routes>
      <Footer />
      <div className="start-game-container">
        <div></div>
        <button>ითამაშე</button>
      </div>
    </div>
  );
}
