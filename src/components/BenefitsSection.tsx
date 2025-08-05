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
          <div className="block-lines-wrapper">
            <div className="block-lines">
              <div className="long-line"></div>
              <div className="circle-center-main">
                <FaLayerGroup />
              </div>
            </div>
          </div>
          <div className="block-for-circle-cards">
            <div>
              <div>
                <div className="circle-develop">
                  <FaRegLightbulb />
                </div>
                <div className="container-descr-develop"></div>
              </div>
              <div className="circle-technologies">
                <MdOutlineWebhook />
              </div>
            </div>
            <div>
              <div className="circle-goals">
                <BsRocketTakeoffFill />
              </div>
            </div>
          </div>

          <div className="oval-left-shadow"></div>
          <div className="oval-right-shadow"></div>
        </div>
      </div>
    </>
  );
}
