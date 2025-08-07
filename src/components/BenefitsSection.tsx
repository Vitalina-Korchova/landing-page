import { FaLayerGroup } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineWebhook } from "react-icons/md";

export default function BenefitsSection() {
  return (
    <>
      <div className="benefits-section">
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
              <div></div>
              <div></div>
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
              <div className="bottom-card-goals"></div>
            </div>
          </div>
          {/* <div className="oval-left-shadow"></div>
          <div className="oval-right-shadow"></div> */}
        </div>
      </div>
    </>
  );
}
