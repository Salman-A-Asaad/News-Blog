import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
import { BsSearch } from "react-icons/bs";
import { Card, ModalCard } from "../../Components/index";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
const Search = () => {
  const [totalResults, setTotalResults] = useState(0);
  const searchRef = useRef();
  const buttonSearchRef = useRef();
  const [searchResult, setSearchResult] = useState({
    query: "",
    articles: null,
    searchPage: 1,
  });
  const changePage = (page) => {
    let searchTitle = searchResult.query;
    let currentPage = searchResult.searchPage + page;
    if (searchTitle !== "") {
      setSearchResult({ ...searchResult, articles: [] });
      fetch(
        process.env.REACT_APP_API_URL_SEARCH +
          searchTitle +
          `&page=
${currentPage}` +
          process.env.REACT_APP_API_KEY,
        {
          method: "GET",
          protocol: "http2",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSearchResult({
            ...searchResult,
            articles: data.articles,
            searchPage: currentPage,
          });
        });
    }
  };
  const handleSearch = () => {
    let searchTitle = searchRef.current.value;
    if (searchTitle !== "") {
      setSearchResult({ ...searchResult, articles: [] });
      fetch(
        process.env.REACT_APP_API_URL_SEARCH +
          searchTitle +
          `&page=
${searchResult.searchPage}` +
          process.env.REACT_APP_API_KEY,
        {
          method: "GET",
          protocol: "http2",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTotalResults(data.totalResults);
          setSearchResult({
            query: searchTitle,
            articles: data.articles,
            searchPage: 1,
          });
          searchRef.current.value = "";
        });
    }
  };
  const handleMostPopular = (e) => {
    searchRef.current.value = e.target.innerHTML;
    handleSearch();
  };
  const handleBefor = () => {
    if (searchResult.searchPage > 1) {
      changePage(-1);
    }
  };
  const handleNext = () => {
    if (searchResult.searchPage < totalResults) {
      changePage(1);
    }
  };
  const mostPopular = ["messi", "usa", "uae", "bitcoin"];
  return (
    <Container className="container py-5">
      <div className="search d-flex justify-content-center">
        <Input
          ref={searchRef}
          id="name"
          type="text"
          placeholder="Search"
          name="search"
        />
        <SearchButton>
          <SearchSpan ref={buttonSearchRef} onClick={handleSearch}>
            <BsSearch />
          </SearchSpan>
        </SearchButton>
      </div>
      <div className="most-popular d-flex flex-wrap justify-content-center my-3">
        <MostPopular>most popular:</MostPopular>
        {mostPopular.map((ele, index) => {
          return (
            <MostPopularSpan onClick={handleMostPopular} key={index}>
              {ele}
            </MostPopularSpan>
          );
        })}
      </div>
      <SearchResults className="row">
        {searchResult.articles?.map((ele, index) => {
          ele.index = index;
          return <Card key={index} article={ele} />;
        })}
        {searchResult.articles?.map((ele, index) => {
          ele.index = index;
          return <ModalCard key={index} article={ele} />;
        })}
      </SearchResults>
      {searchResult.articles != null ? (
        <div className=" mt-5 d-flex align-items-center justify-content-center">
          <Arrow onClick={handleBefor}>
            <BsChevronCompactLeft />
          </Arrow>
          <NumberPage>{searchResult.searchPage}</NumberPage>
          <Arrow onClick={handleNext}>
            <BsChevronCompactRight />
          </Arrow>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};
const Container = styled.div`
  min-height: 40vh;
`;
const Arrow = styled.span`
  cursor: pointer;
  color: ${mainColor};
  border: 1px solid ${mainColor};
  padding: 5px;
  margin: 0 15px;
  background-color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    border-color: white;
    color: white;
    background-color: ${mainColor};
  }
`;
const NumberPage = styled.span`
  color: ${mainColorHover};
  font-size: 20px;
  font-weight: bold;
`;
const Input = styled.input`
  border: none;
  width: 280px;
  border-bottom: 1px solid ${mainColor};
  margin-bottom: 10px;
  padding: 10px;
  transition: all 0.5s;
  &:focus {
    border-bottom-color: ${mainColorHover};
    outline: none;
  }
`;
const SearchButton = styled.button`
  height: fit-content;
  margin-left: 10px;
  color: green;
  background-color: white;
  border: 1px solid green;
  border-radius: 5px;
  transition: all 0.5s;
  &:hover {
    background-color: green;
    color: white;
    border-color: white;
  }
`;
const SearchSpan = styled.span`
  font-size: 23px;
`;
const MostPopularSpan = styled.span`
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  margin: 5px;
  padding: 5px;
  color: gray;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  transition: all 0.5s;
  &:hover {
    background-color: gray;
    color: white;
    border-color: gray;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const MostPopular = styled.span`
  padding: 10px;
  text-align: center;
  font-weight: 700;
  text-transform: capitalize;
  color: ${mainColor};
  animation: ${fadeOut} 1.5s linear infinite alternate;
`;
const SearchResults = styled.div``;
export default Search;
