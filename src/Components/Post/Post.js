import React from "react";
import styled from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
const Post = ({ article }) => {
  return (
    <Article>
      <HeaderPost className="d-flex justify-content-between align-items-center">
        <Title>{article.title}</Title>
        <UserName>{article.userName}</UserName>
      </HeaderPost>
      <ContentPost>{article.post}</ContentPost>
    </Article>
  );
};
const HeaderPost = styled.div`
  width: 100%;
  margin-right: 10px;
  border-bottom: 1px solid #ddd;
`;
const Title = styled.h3`
  text-transform: capitalize;
  color: ${mainColor};
`;
const UserName = styled.h5`
  text-transform: capitalize;
  color: ${mainColorHover};
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
`;
const ContentPost = styled.p`
  word-break: break-all;
`;
export default Post;
