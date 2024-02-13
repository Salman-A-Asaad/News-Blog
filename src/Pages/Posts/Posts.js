import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { Spinner, Post } from "../../Components/index";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("admin") == null) navigate("/");
  const [articles, setArticles] = useState(null);
  const colRef = collection(fireDB, "posts");
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let articles = [];
        snapshot.docs.forEach((doc) => {
          articles.push({ ...doc.data(), id: doc.id });
        });
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <Container className=" container py-5">
      {articles == null ? (
        <CenterSpinner>
          <Spinner />
        </CenterSpinner>
      ) : (
        articles.map((ele, index) => {
          return <Post key={index} article={ele} />;
        })
      )}
    </Container>
  );
};
const Container = styled.div`
  min-height: 40vh;
`;
const CenterSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Posts;
