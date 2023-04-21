import React from "react";
import exampleIcon from "../assets/example-icon.png";
import voucherIcon from "../assets/voucher-pic.png";
import travelIcon from "../assets/travel-icon-sm.png";
import ticketIcon from "../assets/ticket-icon-sm.png";
import "./CashGames.css";

export default function CashGames() {
  return (
    <div className="cashgames-container">
      <section className="cashgames">
        <div className="cashgames-header">
          <div></div>
          <h3 className="cashgames-title">1 ₾ ᲠᲔᲘᲙᲘ = 1 ᲥᲣᲚᲐᲡ</h3>
        </div>
        <div className="cashgames-top">
          <h4 className="cashgames-subtitle">ჰოლდემის TOP20 ლიდერბორდი</h4>
          <img src={exampleIcon} alt="icon" />
        </div>
        <div className="cashgames-list-container">
          <div className="cashgames-list-params">
            <span>ადგილი</span>
            <div>
              <img
                className="cashgames-voucher-icon"
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
        <div className="cashgames-prizes">
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
                სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება
                The Festival in Malta-ს საგზური
              </p>
            </li>
            <li>
              <div></div>
              <img src={voucherIcon} alt="voucher-icon" />
              <p>ტექნიკის მაღაზიის ვაუჩერი</p>
            </li>
          </ul>
        </div>
        <div className="cashgames-top">
          <h4 className="cashgames-subtitle">TOP20 ლიდერბორდი ჰოლდემში</h4>
          <img src={exampleIcon} alt="icon" />
        </div>
        <div className="cashgames-list-container">
          <div className="cashgames-list-params">
            <span>ადგილი</span>
            <div>
              <img
                className="cashgames-voucher-icon"
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
        <div className="cashgames-prizes">
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
                სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება
                The Festival in Malta-ს საგზური
              </p>
            </li>
            <li>
              <div></div>
              <img src={voucherIcon} alt="voucher-icon" />
              <p>ტექნიკის მაღაზიის ვაუჩერი</p>
            </li>
          </ul>
        </div>
        <p className="cashgame-bottom-text">
          * ლიდერბორდის შედეგები განახლდება <span>პოკერის ლობიში</span>
        </p>
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
