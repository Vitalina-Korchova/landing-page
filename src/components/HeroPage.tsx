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
        <img src="./shine.png " className="layer shine " />
        <img src="./beams.png " className="layer beams " />
        <img src="./vector.png " className="layer vector" />

        <nav className="navbar">
          <div className="logo">
            <img className="logo-icon" src="./logo.png" alt="" />
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
        <div className="list-companies"></div>
      </div>
    </>
  );
}
