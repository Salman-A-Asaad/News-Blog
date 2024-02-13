import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { UserContext } from "../../Context/index";
import { addDoc, collection } from "firebase/firestore";
const ModalWrite = () => {
  const userInfo = useContext(UserContext).userInfo;
  const titleRef = useRef();
  const postRef = useRef();
  const closeRef = useRef();
  const handlePost = async () => {
    const title = titleRef.current.value;
    const post = postRef.current.value;
    if (!title || !post) {
      return toast.error("Fill all required fields");
    } else {
      try {
        const colRef = collection(fireDB, "posts");
        await toast.promise(
          addDoc(colRef, {
            title: title,
            post: post,
            userID: userInfo.userID,
            userName: userInfo.userName,
          }),
          {
            loading: "Posting...",
            success: <b>Posted</b>,
            error: <b>Could not Post.</b>,
          }
        );
        titleRef.current.value = "";
        postRef.current.value = "";
        closeRef.current.click();
      } catch (error) {
        toast.error("Post Failed");
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div
        className="modal fade"
        id="write-article"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <H5
                className="modal-title text-capitalize"
                id="staticBackdropLabel"
              >
                write article
              </H5>
              <button
                ref={closeRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Input
                ref={titleRef}
                id="title"
                type="text"
                placeholder="Title"
                name="title"
              />
              <TextArea
                ref={postRef}
                name="post"
                id="post"
                cols="30"
                rows="10"
                placeholder="What Do You Think ?"
              ></TextArea>
            </div>
            <div className="modal-footer">
              <PostArticle onClick={handlePost}>post</PostArticle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const H5 = styled.h5`
  color: ${mainColor};
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${mainColor};
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  transition: all 0.5s;
  &:focus {
    border-bottom-color: ${mainColorHover};
    outline: none;
  }
`;
const TextArea = styled.textarea`
  resize: none;
  border: none;
  border-bottom: 1px solid ${mainColor};
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  transition: all 0.5s;
  &:focus {
    border-bottom-color: ${mainColorHover};
    outline: none;
  }
`;
const PostArticle = styled.span`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
  color: ${mainColor};
  user-select: none;
  font-weight: 600;
  border-radius: 5px;
  padding: 5px;
  background-color: white;
  border: 1px solid ${mainColor};
  cursor: pointer;
  transition: all 0.5s;
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
`;
export default ModalWrite;
