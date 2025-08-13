import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function ServicesSection() {
  const [rotation, setRotation] = useState(0);

  const rotateSliderRight = () => {
    setRotation((prev) => prev + 60);
  };
  const rotateSliderLeft = () => {
    setRotation((prev) => prev - 60);
  };

  const arrayDataCard = [
    {
      title: "Hardware Solution",
      description:
        "Our Hardware Solution service provides top-notch hardware tailored to your business needs. We offer installation, and support for a wide range of equipmen.",
      styleArt: "art1",
    },
    {
      title: "Software Solution",
      description:
        "Our Software Solution service offers custom, high-quality software to meet your business needs, enhancing efficiency and driving growth.",
      styleArt: "art2",
    },
    {
      title: "Innovative Solutions",
      description:
        "Our Innovative Solutions service offers creative and cutting-edge strategies to solve complex business challenges.",
      styleArt: "art3",
    },
    {
      title: "Cloud Integration",
      description:
        "Our Cloud Integration service ensures seamless migration and connection of your systems to secure cloud platforms, enabling scalability and flexibility.",
      styleArt: "art4",
    },
    {
      title: "Cybersecurity Services",
      description:
        "Our Cybersecurity Services protect your business from digital threats with advanced monitoring, threat detection, and robust defense strategies.",
      styleArt: "art5",
    },
    {
      title: "IT Consulting",
      description:
        "Our IT Consulting service provides expert guidance to align your technology strategy with business goals, ensuring long-term growth and efficiency.",
      styleArt: "art6",
    },
  ];
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
            <div className="btn-left" onClick={rotateSliderLeft}>
              <div>
                <IoIosArrowRoundBack />
              </div>
            </div>
            <div
              className="slider"
              style={{
                transform: ` rotateX(-16deg) rotateY(${rotation}deg)`,
                transition: "transform 0.6s ease ",
              }}
            >
              {arrayDataCard.map((card, i) => {
                const anglePerCard = 360 / arrayDataCard.length;

                // обчислює поточний кут картки з урахуванням обертання
                const currentAngle = (i * anglePerCard + rotation) % 360;
                const normalizedAngle = (currentAngle + 360) % 360;

                // Якщо між 90° і 270° — картка ззаду
                const isBack = normalizedAngle > 90 && normalizedAngle < 270;

                return (
                  <div
                    key={i}
                    className="card"
                    style={{
                      transform: `rotateY(${
                        i * anglePerCard
                      }deg) translateZ(350px)`,
                    }}
                  >
                    {isBack ? (
                      <div className="card-back"></div>
                    ) : (
                      <div className="card-front">
                        <span>{card.title}</span>
                        <span>{card.description}</span>
                        <div className={`${card.styleArt}`}></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="btn-right" onClick={rotateSliderRight}>
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
