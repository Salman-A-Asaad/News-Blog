import React from "react";
import styled from "styled-components";
import { mainColorHover } from "../../Styles/index";
const FAQs = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <ButtonAccordion
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${props.faqs.id}`}
          aria-expanded="false"
          aria-controls={`collapse${props.faqs.id}`}
        >
          {props.faqs.question}
        </ButtonAccordion>
      </h2>
      <div
        id={`collapse${props.faqs.id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFAQs"
      >
        <div className="accordion-body text-secondary fw-bold">
          {props.faqs.answer}
        </div>
      </div>
    </div>
  );
};
const ButtonAccordion = styled.button`
  &:not(.collapsed) {
    background-color: ${mainColorHover};
    color: white;
  }
`;

export default FAQs;
