import React from "react";
import "./SpringGames.css";
import cardBannerLeft from "../assets/promo-left-img.png";
import cardBannerRight from "../assets/promo-right-img.png";
import cardBannerLeftSm from "../assets/promo-left-img-m.png";
import cardBannerRightSm from "../assets/promo-right-img-m.png";
import clockIcon from "../assets/clock-with-white-face.png";
import mechanicIcon from "../assets/mechanic-icon.png";
import voucherIcon from "../assets/voucher-pic.png";
import travelIcon from "../assets/travel-icon-sm.png";
import ticketIcon from "../assets/ticket-icon-sm.png";

export default function SpringGames(props) {
  return (
    <div className="springames-container">
      <section className="springames">
        <div className="tournaments">
          <div className="tournaments-header">
            <div></div>
            <h3>ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</h3>
          </div>
          <h3 className="tournaments-title">
            სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
          </h3>
          <div className="tournaments-times-box">
            <div className="times-box-clock">
              <img src={clockIcon} alt="clock-icon" />
            </div>
            <span>19:00 / 19:30 / 20:00</span>
          </div>
          {props.isMobile ? null : (
            <>
              <p className="tournaments-text">
                * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
              </p>
              <p className="tournaments-text">
                ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
              </p>
            </>
          )}

          <button className="tournaments-btn">პოკერის ლობი</button>
          <img
            className="card-banner-left"
            src={props.isMobile ? cardBannerLeftSm : cardBannerLeft}
            alt="cards-icon"
          />
          <img
            className="card-banner-right"
            src={props.isMobile ? cardBannerRightSm : cardBannerRight}
            alt="cards-icon"
          />
        </div>
        <div className="springames-rank-container">
          <div className="springames-header">
            <div></div>
            <h3 className="springames-title">
              ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ
            </h3>
          </div>
          <div className="springames-top">
            <h4 className="springames-subtitle">ქულების დაგროვების მექანიკა</h4>
            <img src={mechanicIcon} alt="icon" />
          </div>
          <div className="springames-list-container">
            <div className="springames-list-params">
              <span>ადგილი</span>
              <div>
                <img
                  className="springames-voucher-icon"
                  src={voucherIcon}
                  alt="voucher-pic"
                />
                <span>ვაუჩერი</span>
              </div>
              <span>პრიზი</span>
            </div>
            <div className="list">
              <ul>
                <li>
                  <span className="list-place">1</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <img src={travelIcon} alt="travel-icon-sm" />
                    <span>A კატეგორიის საგზური</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">2</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <img src={ticketIcon} alt="travel-icon-sm" />
                    <span>B კატეგორიის საგზური</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">3</span>
                  <span className="list-prize">1 500 ₾</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">4</span>
                  <span className="list-prize">1 200 ₾</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">5</span>
                  <span className="list-prize">1 000 ₾</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">6</span>
                  <span className="list-prize">800 ₾</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">7</span>
                  <span className="list-prize">600 ₾</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">8</span>
                  <span className="list-prize">400 ₾</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">9</span>
                  <span className="list-prize">200 ₾</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">10</span>
                  <span className="list-prize">100 ₾</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">11</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">12</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">13</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">14</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">15</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">16</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">17</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">18</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">19</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
                <li>
                  <span className="list-place">20</span>
                  <span className="list-prize">—</span>
                  <div className="list-prize-category">
                    <span>სპეც. ტურნირის ბილეთი</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="springames-prizes">
            <ul>
              <li>
                <div></div>
                <img src={travelIcon} alt="travel-icon" />
                <p>The Festival in Malta-ს საგზური</p>
              </li>
              <li>
                <div></div>
                <img src={ticketIcon} alt="ticket-icon" />
                <p>
                  სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც
                  გათამაშდება The Festival in Malta-ს საგზური
                </p>
              </li>
              <li>
                <div></div>
                <img src={voucherIcon} alt="voucher-icon" />
                <p>ტექნიკის მაღაზიის ვაუჩერი</p>
              </li>
            </ul>
          </div>
          <p className="springames-bottom-text">
            * ლიდერბორდის შედეგები განახლდება <span>პოკერის ლობიში</span>
          </p>
          <p className="springames-bottom-text">
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </p>
        </div>
        <div className="daily-tournaments-container">
          <h3 className="daily-tournament-title">
            ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ
          </h3>
          <div className="daily-tournament-little-banners">
            <div className="daily-tournament-banner-left">
              <div>
                <span className="daily-tournament-banner-name">
                  Holdem Highrollers
                </span>
                <span className="daily-tournament-banner-prize">50 000 ₾</span>
              </div>
              <div>
                <span className="daily-tournament-banner-buyin">
                  ბაი-ინი - 550₾
                </span>
                <span className="daily-tournament-banner-date">27 აპრილი</span>
              </div>
            </div>
            <div className="daily-tournament-banner-right">
              <div>
                <span className="daily-tournament-banner-name">
                  Omaha Highrollers
                </span>
                <span className="daily-tournament-banner-prize">50 000₾</span>
              </div>
              <div>
                <span className="daily-tournament-banner-buyin">
                  ბაი-ინი - 550₾
                </span>
                <span className="daily-tournament-banner-date">28 აპრილი</span>
              </div>
            </div>
          </div>
          <div className="daily-tournament-big-banner">
            <div>
              <span className="daily-tournament-big-banner-name">
                Main Events
              </span>
              <span className="daily-tournament-big-banner-prize">
                150 000₾
              </span>
            </div>
            <div>
              <span className="daily-tournament-big-banner-buyin">
                ბაი-ინი - 550₾
              </span>
              <span className="daily-tournament-big-banner-date">
                29 აპრილი
              </span>
            </div>
          </div>
          <p>
            * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
            The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
            საგზურის მისაღებად.
          </p>
        </div>
      </section>
      <section className="more-info-container">
        <div></div>
        <p className="more-info-main-text">
          ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE
          ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ
        </p>
        <p className="more-info-sub-text">
          * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
          ლობიში.
        </p>
      </section>
    </div>
  );
}
