import React from "react";
import "./FinalStage.css";
import finalChipIcon from "../assets/final-item-event-icon.png";
import finalHotelIcon from "../assets/final-item-hotel-icon.png";
import finalMoneyIcon from "../assets/final-item-money-icon.png";
import finalTicketIcon from "../assets/final-item-ticket-icon.png";
import finalPlaneIcon from "../assets/poker-item-1-ticket-icon.png";
import finalDoublePlaneIcon from "../assets/poker-item-2-ticket-icon.png";
import misteryKeyIcon from "../assets/mistery-key-icon.png";

export default function FinalStage() {
  return (
    <div className="finalstage-container">
      <div className="finalstage-top-content-wrapper">
        <div className="finalstage-header">
          <div className="finalstage-header-banner"></div>
          <h3 className="finalstage-header-title">
            ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!
          </h3>
          <p className="finalstage-header-text">
            The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
            პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
          </p>
          <div className="finalstage-header-date-box">
            <div></div>
            <p>15-დან 21მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს</p>
          </div>
        </div>
        <div className="finalstage-cards">
          <div className="finalstage-card">
            <div className="finalstage-card-header">
              <div></div>
              <h3 className="finalstage-card-title">
                A კატეგორიის საგზურში შედის
              </h3>
            </div>
            <ul>
              <li>
                <img src={finalTicketIcon} alt="ticket-icon" />
                <span>ორმხრივი ავიაბილეთი</span>
              </li>
              <li>
                <img src={finalChipIcon} alt="ticket-icon" />
                <span>The Festival in Malta -ს მეინ ივენთის ბაი-ინი</span>
              </li>
              <li>
                <img src={finalChipIcon} alt="ticket-icon" />
                <span>Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი</span>
              </li>
              <li>
                <img src={finalHotelIcon} alt="ticket-icon" />
                <span>სასტუმრო Golden Tulip Vivaldi Hote</span>
              </li>
              <li>
                <img src={finalMoneyIcon} alt="ticket-icon" />
                <span>€500 სახარჯი ფული</span>
              </li>
            </ul>
          </div>
          <div className="finalstage-card">
            <div className="finalstage-card-header">
              <div></div>
              <h3 className="finalstage-card-title">
                A კატეგორიის საგზურში შედის
              </h3>
            </div>
            <ul>
              <li>
                <img src={finalTicketIcon} alt="ticket-icon" />
                <span>ორმხრივი ავიაბილეთი</span>
              </li>
              <li>
                <img src={finalChipIcon} alt="ticket-icon" />
                <span>The Festival in Malta -ს მეინ ივენთის ბაი-ინი</span>
              </li>
              <li>
                <img src={finalChipIcon} alt="ticket-icon" />
                <span>Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი</span>
              </li>
              <li>
                <img src={finalHotelIcon} alt="ticket-icon" />
                <span>სასტუმრო Golden Tulip Vivaldi Hote</span>
              </li>
              <li>
                <img src={finalMoneyIcon} alt="ticket-icon" />
                <span>€500 სახარჯი ფული</span>
              </li>
            </ul>
          </div>
          <div className="finalstage-card">
            <div className="finalstage-card-header">
              <div></div>
              <h3 className="finalstage-card-title">
                A კატეგორიის საგზურში შედის
              </h3>
            </div>
            <ul>
              <li>
                <img src={finalTicketIcon} alt="ticket-icon" />
                <span>ორმხრივი ავიაბილეთი</span>
              </li>
              <li>
                <img src={finalChipIcon} alt="ticket-icon" />
                <span>The Festival in Malta -ს მეინ ივენთის ბაი-ინი</span>
              </li>
              <li>
                <img src={finalHotelIcon} alt="ticket-icon" />
                <span>სასტუმრო</span>
              </li>
              <li>
                <img src={finalMoneyIcon} alt="ticket-icon" />
                <span>€500 სახარჯი ფული</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="finalstage-travel-cards">
        <div className="finalstage-travel-header">
          <div></div>
          <h3>ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ</h3>
        </div>
        <div className="finalstage-travel-cards-container">
          <div className="finalstage-travel-cards-left">
            <div>
              <h3>“Cashgame Highrollers” -</h3>
              <span>1 საგზური</span>
              <img src={finalPlaneIcon} alt="plane-icon" />
            </div>
            <div>
              <h3>“Cashgame Highrollers” -</h3>
              <span>1 საგზური</span>
              <img src={finalPlaneIcon} alt="plane-icon" />
            </div>
            <div>
              <h3>“Cashgame Highrollers” -</h3>
              <span>1 საგზური</span>
              <img src={finalPlaneIcon} alt="plane-icon" />
            </div>
          </div>
          <div className="finalstage-travel-cards-right">
            <div>
              <h3>„The Festival in Malta, GTD“</h3>
              <span>A კატეგორიის 1 საგზური</span>
              <span>B კატეგორიის 1 საგზური</span>
              <p>
                ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </p>
              <img src={finalDoublePlaneIcon} alt="plane-icon" />
            </div>
            <div>
              <h3>„The Festival in Malta, GTD“</h3>
              <span>A კატეგორიის 1 საგზური</span>
              <span>B კატეგორიის 1 საგზური</span>
              <p>
                ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </p>
              <img src={finalPlaneIcon} alt="double-plane-icon" />
            </div>
          </div>
        </div>
        <p className="finalstage-travel-bottom-text">
          * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
          ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
        </p>
        <p className="finalstage-travel-bottom-text">
          *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
          ბაი-ინის გადახდით.
        </p>
      </div>

      <div className="finalstage-mistery-key-container">
        <div className="mistery-key-header">
          <div></div>
          <img src={misteryKeyIcon} alt="mistery-key-icon" />
        </div>
        <div className="mistery-key-list-container">
          <p className="mistery-key-text">
            მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
            მიიღებენ საიდუმლო გასაღებს
          </p>
          <ul>
            <li>
              <span className="mistery-key-list-number">1</span>
              <p className="mistery-key-list-text">
                სპეციალური ტურნირი Cashgame Sharks II ადგილი
              </p>
            </li>
            <li>
              <span className="mistery-key-list-number">2</span>
              <p className="mistery-key-list-text">
                სპეციალური ტურნირი Cashgame Sharks II ადგილი
              </p>
            </li>
            <li>
              <span className="mistery-key-list-number">3</span>
              <p className="mistery-key-list-text">
                სპეციალური ტურნირი Tournament Sharks II ადგილი
              </p>
            </li>
            <li>
              <span className="mistery-key-list-number">4</span>
              <p className="mistery-key-list-text">
                სპეც. ტურნირი Tournament Sharks III ადგილი
              </p>
            </li>
            <li>
              <span className="mistery-key-list-number">5</span>
              <p className="mistery-key-list-text">
                Holdem Grinders ლიდერბორდის გამარჯვებული
              </p>
            </li>
            <li>
              <span className="mistery-key-list-number">6</span>
              <p className="mistery-key-list-text">
                ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები
              </p>
            </li>
            <li>
              <span className="mistery-key-list-number">7</span>
              <p className="mistery-key-list-text">
                სპეციალური ტურნირი Cashgame Sharks II ადგილი
              </p>
            </li>
            <li>
              <span className="mistery-key-list-number">8</span>
              <p className="mistery-key-list-text">
                სპეციალური ტურნირი Cashgame Sharks II ადგილი
              </p>
            </li>
            <li>
              <span className="mistery-key-list-number">9</span>
              <p className="mistery-key-list-text">
                სპეციალური ტურნირი Cashgame Sharks II ადგილი
              </p>
            </li>
            <li>
              <span className="mistery-key-list-number">10</span>
              <p className="mistery-key-list-text">
                სპეციალური ტურნირი Cashgame Sharks II ადგილი
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
