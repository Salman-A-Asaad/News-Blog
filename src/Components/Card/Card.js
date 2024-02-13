import React from "react";
import { mainColor, mainColorHover } from "../../Styles/index";
import image from "../../Assests/no-img.png";
import styled from "styled-components";
const Card = (props) => {
  return (
    <>
      <div className="card-container mt-2 col-sm-6 col-md-4 col-lg-3">
        <CardArticle className="card ">
          <img
            src={
              props.article?.urlToImage != null
                ? props.article?.urlToImage
                : image
            }
            className="card-img-top"
            alt={props.article.title}
          />

          <div className="card-body">
            <H5 className="card-title">{props.article?.title}</H5>

            <ButtonShow
              className="btn btn-primary btn-show text-capitalize"
              role="button"
              data-bs-toggle="modal"
              data-bs-target={`#article${String(props.article.index)}`}
            >
              details
            </ButtonShow>
          </div>
        </CardArticle>
      </div>
    </>
  );
};
const H5 = styled.h5`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px !important;
`;
const ButtonShow = styled.button`
  font-size: 16px !important;
  background-color: ${mainColor} !important;
  border-color: ${mainColor} !important ;
  transition: all 0.5s;
  &:hover {
    border-color: white !important;
    background-color: ${mainColorHover} !important;
  }
`;
const CardArticle = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 320px;
  img {
    object-fit: fill;
    height: 212px;
  }
`;
export default Card;
