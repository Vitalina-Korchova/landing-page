import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="block">
          <div>
            <div className="logo">
              <img className="logo-icon" src="./logo.svg" alt="" />
              <span>SpaceV</span>
            </div>
            <div className="text">
              <span>we has the full types of potential for</span>
              <span>your start-up business.</span>
            </div>
          </div>
          <div>
            <span>Quick Links</span>
            <div>
              <span>
                <Link to="home" smooth={true} duration={1600}>
                  Home
                </Link>
              </span>
              <span>
                <Link to="benefits" smooth={true} duration={1600}>
                  Our Benefits
                </Link>
              </span>
              <span>
                <Link to="services" smooth={true} duration={1600}>
                  Our Services
                </Link>
              </span>
              <span>
                <Link to="community" smooth={true} duration={1600}>
                  Community
                </Link>
              </span>
              <span>
                <Link to="testimonials" smooth={true} duration={1600}>
                  Testimonials
                </Link>
              </span>
              <span>
                <Link to="faq" smooth={true} duration={1600}>
                  FAQ
                </Link>
              </span>
            </div>
          </div>

          <div>
            <div>
              <span>Join the SpaceV</span>
              <span>Community</span>
            </div>
            <div>
              <input
                type="text"
                id="field-email"
                placeholder="Enter Your Email"
              />
              <button type="button">Join Us</button>
            </div>
            <div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaLinkedinIn />
              </div>
              <div>
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
        <div className="semicircle"></div>
        <div className="white-blur-circle"></div>
        <div className="purple-blur-circle"></div>
      </div>
    </>
  );
}
