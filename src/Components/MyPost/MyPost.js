import React from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { mainColor } from "../../Styles/index";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
const MyPost = ({ article }) => {
  const handleDelete = async (id) => {
    const docRef = doc(fireDB, "posts", id);
    try {
      await toast.promise(deleteDoc(docRef), {
        loading: "Deleting...",
        success: <b>Deleted</b>,
        error: <b>Could not Delete.</b>,
      });
    } catch (error) {
      toast.error("Delete Failed");
      console.log(error);
    }
  };
  return (
    <Article>
      <HeaderPost className="d-flex justify-content-between align-items-center">
        <Title>{article.title}</Title>
        <Delete onClick={() => handleDelete(article.id)} type="button">
          delete
        </Delete>
      </HeaderPost>
      <p>{article.post}</p>
    </Article>
  );
};
const HeaderPost = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;
const Title = styled.h3`
  text-transform: capitalize;
  color: ${mainColor};
`;
const Article = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 80%;
  margin: 20px auto;
  p {
    color: gray;
    font-size: 16px;
  }
  @media (max-width: 560px) {
    width: 95%;
  }
`;
const Delete = styled.button`
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: capitalize;
  border-radius: 5px;
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
export default MyPost;
