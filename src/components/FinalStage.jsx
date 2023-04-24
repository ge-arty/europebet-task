import React from "react";
import "./FinalStage.css";

export default function FinalStage() {
  return (
    <div className="finalstage-container">
      <div className="finalstage-header">
        <div className="finalstage-header-banner"></div>
        <h3 className="finalstage-header-title">
          ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!
        </h3>
        <p className="finalstage-header-text">
          The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის
          მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
        </p>
        <div className="finalstage-header-date-box">
          <div></div>
          <p>15-დან 21მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს</p>
        </div>
      </div>
      <div className="finalstage-cards">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="finalstage-prize-cards"></div>
      <div className="finalstage-mistery-key-container"></div>
    </div>
  );
}
