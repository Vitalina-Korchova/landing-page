import Marquee from "react-fast-marquee";
import {
  FaBriefcase,
  FaChartLine,
  FaChartPie,
  FaExchangeAlt,
  FaNewspaper,
  FaSatelliteDish,
  FaUniversity,
} from "react-icons/fa";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

export default function HeroPage() {
  return (
    <>
      <div className="hero-page">
        <div className="back-planet">
          <img src="./shine.svg " className="layer shine " />
          <img src="./beams.svg" className="layer beams " />
          <div className="radial-circle"></div>
          <div className="radial-circle-white"></div>
          <div className="white-bottom"></div>
          <div className="planet"></div>
        </div>
        <nav className="navbar">
          <div className="logo">
            <img className="logo-icon" src="./logo.svg" alt="" />
            <span>SpaceV</span>
          </div>
          <div className="nav-link">
            <div className="nav-links-items">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Benefits</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Reviews</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />

        <div className="text-main">
          <span>
            Empower <span className="word-bold">Modern</span>
          </span>
          <span className="word-bold">Technology</span>
        </div>

        <div className="btn-wrapper">
          <button>
            <HiOutlineArrowNarrowDown />
          </button>
        </div>
        <div className="list-companies">
          <Marquee className="list-companies-inner ">
            <div>
              <FaSatelliteDish />
              NovaLink
            </div>
            <div>
              <FaChartLine />
              Finora Capital
            </div>
            <div>
              <FaExchangeAlt />
              TradeNova Exchange
            </div>
            <div>
              <FaUniversity />
              EuroTrust Bank
            </div>
            <div>
              <FaChartPie />
              LedgerLogic
            </div>
            <div>
              <FaNewspaper />
              MacroPulse
            </div>
            <div>
              <FaBriefcase />
              Investora
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
