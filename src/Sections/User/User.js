import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { mainColor, mainColorHover } from "../../Styles";
import { BsPencilSquare, BsFillPersonFill } from "react-icons/bs";
import { ModalWrite } from "../../Components/index";
import { UserContext } from "../../Context/index";
import { Link, useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();
  const usernameVale = JSON.parse(localStorage.getItem("admin")).user
    .providerData[0].displayName;
  const setUserInfo = useContext(UserContext).setUserInfo;
  const personRef = useRef();
  const userInfoRef = useRef();
  const handlePersonClik = () => {
    userInfoRef.current.classList.toggle("show");
    personRef.current.classList.toggle("change");
  };
  const handleLogOut = () => {
    localStorage.clear();
    setUserInfo(false);
    navigate("/");
  };
  return (
    <>
      <Person onClick={handlePersonClik} ref={personRef}>
        <BsFillPersonFill />
      </Person>
      <MeUser ref={userInfoRef}>
        <MyName>{usernameVale == null ? "user" : usernameVale}</MyName>
        <WriteArticle data-bs-target="#write-article" data-bs-toggle="modal">
          write{"  "}
          <span className="ms-2">
            <BsPencilSquare />
          </span>
        </WriteArticle>
        <Link className=" text-decoration-none" to={"/ourArticles"}>
          {" "}
          <Articles>posts</Articles>
        </Link>
        <Link className=" text-decoration-none" to={"/myArticles"}>
          {" "}
          <MyArticles>my posts</MyArticles>
        </Link>

        <LogOutButton onClick={handleLogOut} type="button" className="mt-3">
          log out
        </LogOutButton>
      </MeUser>
      <ModalWrite />
    </>
  );
};
const Person = styled.span`
  cursor: pointer;
  position: absolute;
  font-size: 25px;
  right: 15px;
  top: 15px;
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${mainColor};
  color: white;
  border-radius: 50%;
  z-index: 21;
  transition: all 0.5s;
  &.change {
    right: 95px;
    transform: rotate(360deg);
  }
`;
const LogOutButton = styled.button`
  font-weight: 600;
  text-transform: capitalize;
  margin-top: 15px;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  color: #dc3545;
  background-color: white;
  border: 1px solid #dc3545;
  transition: all 0.5s;
  &:hover {
    color: white;
    border-color: white;
    background-color: #dc3545;
  }
`;
const MyName = styled.span`
  display: block;
  color: ${mainColorHover};
  text-transform: capitalize;
  width: 100%;
  text-align: center;
  font-weight: 600;
`;
const MeUser = styled.div`
  border: 3px solid ${mainColor};
  position: absolute;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  background-color: white;
  right: 15px;
  top: -100%;
  z-index: 11;
  transition: all 0.5s;
  &.show {
    top: 65px;
  }
`;
const WriteArticle = styled.span`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
  color: ${mainColorHover};
  user-select: none;
  font-weight: 600;
  border-radius: 5px;
  padding: 5px;
  background-color: white;
  border: 1px solid ${mainColorHover};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: white;
    border-color: white;
    background-color: ${mainColorHover};
    span {
      color: white;
    }
  }
  &.active {
    color: white;
    border-color: white;
    background-color: ${mainColorHover};
  }
  span {
    color: ${mainColorHover};
    font-size: 16px;
    transition: all 0.5s;
  }
`;
const Articles = styled(WriteArticle)``;
const MyArticles = styled(WriteArticle)``;
export default User;
