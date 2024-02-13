import React from "react";
import styled from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
import { BsLink45Deg } from "react-icons/bs";
const ModalCard = (props) => {
  return (
    <div
      className="modal fade"
      id={`article${String(props.article.index)}`}
      tabIndex="-1"
      aria-labelledby="producModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <H1 className="modal-title fs-5" id="producModalLabel">
              {props.article?.title}
            </H1>
          </div>
          <div className="modal-body text-secondary">
            <div className="sections-details text-capitalize">
              <Span className="span-header text-capitalize">
                Description :{" "}
              </Span>
              {props.article?.description}
            </div>
            <div className="sections-details text-capitalize">
              <Span className="span-header text-capitalize">
                published at :{" "}
              </Span>
              {props.article?.publishedAt.split("T")[0]}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary text-capitalize"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <Href href={props.article.url} target="_blank">
              <BsLink45Deg />
            </Href>
          </div>
        </div>
      </div>
    </div>
  );
};
const H1 = styled.h1`
  color: ${mainColor};
`;
const Span = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: ${mainColorHover};
`;
const Href = styled.a`
  font-size: 40px;
  color: ${mainColor};
  transition: all 1s;
  &:hover {
    color: ${mainColorHover};
    transform: rotate(360deg);
  }
`;
export default ModalCard;
