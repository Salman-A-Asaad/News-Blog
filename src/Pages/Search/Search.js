import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
import { BsSearch } from "react-icons/bs";
import { Card, ModalCard, Spinner } from "../../Components/index";
const Search = () => {
  const searchRef = useRef();
  const buttonSearchRef = useRef();
  const [searchResult, setSearchResult] = useState({
    query: "",
    articles: null,
    loading: false,
  });
  const handleSearch = () => {
    let searchTitle = searchRef.current.value;
    if (searchTitle !== "") {
      setSearchResult({ ...searchResult, articles: [], loading: true });
      fetch(process.env.REACT_APP_API_URL_SEARCH + searchTitle, {
        method: "GET",
        protocol: "http2",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSearchResult({
            query: searchTitle,
            articles: data.results,
            loading: false,
          });
          searchRef.current.value = "";
        });
    }
  };
  const handleMostPopular = (e) => {
    searchRef.current.value = e.target.innerHTML;
    handleSearch();
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
        {searchResult.articles === null ? (
          <div
            style={{ width: "100%", color: mainColor }}
            className=" text-capitalize d-flex align-items-center justify-content-center fw-bold pt-3"
          >
            search to show articles
          </div>
        ) : (
          ""
        )}
        {searchResult.loading ? <Spinner /> : ""}
        {searchResult.articles?.map((ele, index) => {
          ele.index = index;
          return <Card key={index} article={ele} />;
        })}
        {searchResult.articles?.map((ele, index) => {
          ele.index = index;
          return <ModalCard key={index} article={ele} />;
        })}
      </SearchResults>
    </Container>
  );
};
const Container = styled.div`
  min-height: 40vh;
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
