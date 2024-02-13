import React from "react";
import image from "../../Assests/more_articles.svg";
import styled from "styled-components";
import { mainColor } from "../../Styles/index";
import { Link } from "react-router-dom";
const MoreArticles = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <Div className="col-sm-12 col-md-6 col-lg-6">
          <img src={image} alt="more articles" />
        </Div>
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <H3 className="text-capitalize mb-3">more articles</H3>
          <p className="text-secondary fs-5 fs-sm-6">
            You can see more articles in various fields to search for
            information that interests you and that you want to increase your
            information with by searching on the search page.
          </p>
          <p className="text-secondary fs-5 fs-sm-6">
            Stay on the latest news in our site and be the first to get the
            latest information and news.
          </p>
          <div className="mt-4 d-flex align-item-end justify-content-end">
            <Link className=" text-decoration-none" to="/search">
              <SearchPage href="#search">search</SearchPage>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const Div = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
const H3 = styled.h3`
  color: ${mainColor};
`;
const SearchPage = styled.span`
  color: ${mainColor};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  border: 1px solid ${mainColor};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: white;
    border-color: white;
    background-color: ${mainColor};
  }
  @media (max-width: 320px) {
    padding: 15px;
  }
`;

export default MoreArticles;
