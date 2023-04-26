import React from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Header(props) {
  console.log(props.isMobile);
  const location = useLocation();
  return (
    <div className="header-container">
      <div className="header-banner"></div>
      <div className="header-title">
        <h2>
          {props.isMobile
            ? "მოიპოვე 10 საგზურიდან ერთ-ერთი"
            : "მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი"}
        </h2>
        <p>მოხვდი პოკერის ფესტივალზე მალტაში</p>
      </div>
      <nav className="header-navigation">
        <NavLink
          className={
            location.pathname === "/" || location.pathname === "/my-app"
              ? "header-navigation-elem active"
              : "header-navigation-elem"
          }
          to="/"
          exact="true"
        >
          <p>1 - 29 აპრილი</p>
          <h6>Cash Games</h6>
        </NavLink>
        <NavLink className="header-navigation-elem" to={"/SpringSeries"}>
          <p>13 - 29 აპრილი</p>
          <h6>Spring Series</h6>
        </NavLink>
        <NavLink className="header-navigation-elem" to={"/FinalStage"}>
          <p>30 აპრილი</p>
          <h6>Final Stage</h6>
        </NavLink>
      </nav>
    </div>
  );
}
