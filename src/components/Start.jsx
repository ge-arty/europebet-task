import React from "react";
import europebetIcon from "../assets/europebet_small.png";
import "./Start.css";

export default function Start(props) {
  return (
    <div className="start-container">
      <img
        className="start-btn"
        src={europebetIcon}
        alt="europebet-icon"
        onClick={() => props.setStarted()}
      />
    </div>
  );
}
