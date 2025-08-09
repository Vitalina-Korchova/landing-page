export default function ServicesSection() {
  const cards = 6;
  return (
    <>
      <div className="services-section">
        <div className="back-chess-wrapper">
          <div className="back-chess">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="square"></div>
            ))}
          </div>
          <div className="oval-shadow"></div>
        </div>
        <div className="banner">
          <div className="slider-wrapper">
            <div className="slider">
              {Array.from({ length: cards }).map((_, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    transform: `rotateY(${
                      (360 / cards) * i
                    }deg) translateZ(550px)`,
                  }}
                >
                  <div className="card-inner"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
