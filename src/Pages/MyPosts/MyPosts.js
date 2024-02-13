import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { Spinner, MyPost } from "../../Components/index";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/index";
import { mainColor } from "../../Styles";

const MyPosts = () => {
  const userInfo = useContext(UserContext).userInfo;
  const navigate = useNavigate();
  if (localStorage.getItem("admin") == null) navigate("/");
  const [myArticles, setArticles] = useState(null);
  const colRef = collection(fireDB, "posts");
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      let articles = [];
      snapshot.docs.forEach((doc) => {
        if (userInfo.userID === doc.data().userID)
          articles.push({ ...doc.data(), id: doc.id });
      });
      setArticles(articles);
    });
  });
  return (
    <Container className=" container py-5">
      {myArticles == null ? (
        <CenterSpinner>
          <Spinner />
        </CenterSpinner>
      ) : (
        myArticles.map((ele, index) => {
          return <MyPost key={index} article={ele} />;
        })
      )}
      {myArticles?.length === 0 ? <NoArticles>no post yet!</NoArticles> : ""}
    </Container>
  );
};
const NoArticles = styled.h2`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  color: ${mainColor};
`;
const Container = styled.div`
  min-height: 40vh;
`;
const CenterSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default MyPosts;
