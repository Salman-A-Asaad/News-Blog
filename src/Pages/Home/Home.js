import React, { useRef, useState } from "react";
import styled from "styled-components";
import { mainColor } from "../../Styles/index";
import {
  Sports,
  Business,
  Technology,
  MoreArticles,
} from "../../Sections/index";
const Home = ({ types }) => {
  const newsTypeSelected = [
    <Business business={types[0]} />,
    <Sports sports={types[1]} />,
    <Technology technology={types[2]} />,
  ];
  const [newsType, setNewsType] = useState(0);
  const typeNews = useRef();
  const handleActive = (e) => {
    [...typeNews.current.children].forEach((child) => {
      child.classList.remove("active");
    });
    e.target.classList.add("active");
    setNewsType(Number(e.target.dataset.index));
  };
  return (
    <div className="container py-5">
      <H2 className="text-center text-capitalize mb-3">welcom to news blog</H2>
      <p className="text-center text-secondary mb-5">
        Stay informed with the latest news and updates from around the world.
        Our blog covers a wide range of topics, including technology, science,
        lifestyle, and more. Whether you're a tech enthusiast, a curious mind,
        or just looking for interesting reads, you'll find something here to
        captivate your interest.
      </p>
      <div
        ref={typeNews}
        className="d-flex justify-content-center align-items-center"
      >
        <SelectedNews
          data-index="0"
          onClick={handleActive}
          className="text-capitalize active"
        >
          business
        </SelectedNews>
        <SelectedNews
          data-index="1"
          onClick={handleActive}
          className="text-capitalize"
        >
          sports
        </SelectedNews>
        <SelectedNews
          data-index="2"
          onClick={handleActive}
          className="text-capitalize"
        >
          techno
        </SelectedNews>
      </div>
      <div className="row my-5">{newsTypeSelected[newsType]}</div>
      <MoreArticles />
    </div>
  );
};
const H2 = styled.h3`
  color: ${mainColor};
`;
const SelectedNews = styled.span`
  color: ${mainColor};
  user-select: none;
  font-weight: 600;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  border: 1px solid ${mainColor};
  cursor: pointer;
  transition: all 0.5s;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
  &:hover {
    color: white;
    border-color: white;
    background-color: ${mainColor};
  }
  &.active {
    color: white;
    border-color: white;
    background-color: ${mainColor};
  }
  @media (max-width: 320px) {
    padding: 15px;
  }
`;
export default Home;
