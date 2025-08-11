import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function ServicesSection() {
  const cards = 6;
  return (
    <>
      <div className="services-section">
        <div className="text">
          <span>Comprehensive Service </span>
          <span> Offerings</span>
        </div>
        <div className="back-chess-wrapper">
          <div className="back-chess">
            <div className="back-chess-inner">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="square"></div>
              ))}
            </div>
            <div className="oval-shadow"></div>
          </div>
        </div>
        <div className="banner">
          <div className="slider-wrapper">
            <div className="btn-left">
              <div>
                <IoIosArrowRoundBack />
              </div>
            </div>
            <div className="slider">
              {Array.from({ length: cards }).map((_, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    transform: `rotateY(${
                      (360 / cards) * i
                    }deg) translateZ(350px)`,
                  }}
                >
                  <div className="card-inner"></div>
                </div>
              ))}
            </div>

            <div className="btn-right">
              <div>
                <IoIosArrowRoundForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
