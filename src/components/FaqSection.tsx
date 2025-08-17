import {
  Accordion,
  AccordionItem as Item,
  type AccordionItemProps,
} from "@szhsin/react-accordion";
import { PiStarFourFill } from "react-icons/pi";

const AccordionItem = ({ header, ...rest }: AccordionItemProps) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <PiStarFourFill className="star-down" />
      </>
    }
  />
);

export default function FaqSection() {
  const items = [
    {
      header: "What services does your agency offer?",
      content:
        "Our agency provides a range of services to meet your business needs, including custom software solutions, graphic design, web development, and digital marketing. We specialize in creating high-quality, user-friendly, and visually appealing products that enhance efficiency and drive growth.",
    },
    {
      header: "How do you ensure the quality of your work?",
      content:
        "Quality is at the core of everything we do. Each project goes through a thorough planning, design, and development process, followed by multiple rounds of testing and reviews. We follow industry best practices and encourage client feedback at every stage to ensure the final result meets and exceeds expectations.",
    },
    {
      header: "How do you handle project revisions or changes?",
      content:
        "We understand that ideas can evolve during the project. Minor revisions are included as part of the workflow, while larger changes are discussed openly with you to evaluate their impact on the timeline and budget. This way, we maintain flexibility while keeping the project on track.",
    },
    {
      header: "What if I'm not satisfied with the final result?",
      content:
        "Your satisfaction is our priority. If the final result does not meet your expectations, we work closely with you to make necessary adjustments until you are happy with the outcome. Our goal is to deliver a product that truly supports your vision and business needs.",
    },
  ];

  return (
    <>
      <div className="faq-section">
        <div className="text">
          <span>Frequently Asked</span>
          <span>Questions</span>
        </div>
        <div className="accordion-wrapper">
          <Accordion transition transitionTimeout={250}>
            {items.map(({ header, content }, i) => (
              <AccordionItem header={header} key={i}>
                {content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
