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
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "motion/react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function HeroPage() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <>
      <div className="hero-page" id="home">
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
                  <Link to="benefits" smooth={true} duration={1600}>
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link to="services" smooth={true} duration={1600}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="community" smooth={true} duration={1600}>
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="testimonials" smooth={true} duration={1600}>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="faq" smooth={true} duration={1600}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu" onClick={() => setShowNavLinks(true)}>
            <IoMenu />
          </div>
        </nav>
        <hr />

        <AnimatePresence>
          {showNavLinks && (
            <motion.div
              key="side-navbar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="side-navbar"
            >
              <div className="logo-btn">
                <div className="logo">
                  <img className="logo-icon" src="./logo.svg" alt="" />
                  <span>SpaceV</span>
                </div>
                <div onClick={() => setShowNavLinks(false)}>
                  <IoClose />
                </div>
              </div>
              <hr />
              <div className="nav-links-items">
                <ul>
                  <li>
                    <Link to="benefits" smooth={true} duration={1600}>
                      Benefits
                    </Link>
                  </li>
                  <li>
                    <Link to="services" smooth={true} duration={1600}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="community" smooth={true} duration={1600}>
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link to="testimonials" smooth={true} duration={1600}>
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link to="faq" smooth={true} duration={1600}>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-main">
          <span>
            Empower <span className="word-bold">Modern</span>
          </span>
          <span className="word-bold">Technology</span>
        </div>

        <div className="btn-wrapper">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="benefits" smooth={true} duration={1600}>
              <HiOutlineArrowNarrowDown style={{ display: "block" }} />
            </Link>
          </motion.button>
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
