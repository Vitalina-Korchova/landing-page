import { FaLayerGroup } from "react-icons/fa";

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
            <div className="long-line"></div>
          </div>
          <div className="oval-left"></div>
          <div className="oval-right"></div>
          <div className="circle-center-main">
            <FaLayerGroup />
          </div>
        </div>
      </div>
    </>
  );
}
