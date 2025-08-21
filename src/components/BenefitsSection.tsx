import { FaLayerGroup } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineWebhook } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";

export default function BenefitsSection() {
  return (
    <>
      <div className="benefits-section" id="benefits">
        <div className="text-section-main">
          <span>Innovative Problem-Solving for</span>
          <span>Your Business Needs</span>
        </div>
        <div className="block-section">
          <div className="block-lines">
            <div className="block-lines-top">
              <div className="circle-center-main">
                <FaLayerGroup />
              </div>
            </div>
            <div className="block-long-line"></div>
          </div>
          <div className="block-cards">
            <div className="block-2-cards">
              <div className="block-card-inner">
                <div className="stars">
                  <PiStarFourFill />
                  <PiStarFourFill />
                </div>
                <span>Developing tailored solutions</span>
                <span>
                  Next, our team of experts develops tailored solutions.
                </span>
              </div>
              <div className="block-card-inner">
                <div className="stars">
                  <PiStarFourFill />
                  <PiStarFourFill />
                </div>
                <span>Implementing Technology</span>
                <span>
                  We leverage cutting-edge technology impolement seamlessly.
                </span>
              </div>
            </div>
            <div className="block-icons">
              <div>
                <div className="circle-develop">
                  <FaRegLightbulb />
                </div>
                <div className="circle-technologies">
                  <MdOutlineWebhook />
                </div>
                <div className="card-develop"></div>
                <div className="card-technologies"></div>
              </div>
              <div>
                <div className="circle-goals">
                  <BsRocketTakeoffFill />
                </div>
              </div>
            </div>
            <div className="block-single-card">
              <div className="bottom-card-goals">
                <div className="stars">
                  <PiStarFourFill />
                  <PiStarFourFill />
                </div>
                <span>Understanding Your Business Goals</span>
                <span>
                  We start by gaining a deep understanding of your business
                  goals. We take the time to learn about your unique vision,
                  challenges, and objectives. This deep understanding allows us
                  to create tailored solutions that align perfectly with your
                  goals, ensuring maximum impact and success.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="oval-left-shadow"></div>
        <div className="oval-right-shadow"></div>
      </div>
    </>
  );
}
