import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { UserContext } from "../../Context/index";
const ModalSginUp = () => {
  const setUserInfo = useContext(UserContext).setUserInfo;
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const closeRef = useRef();
  const handleSignUp = async (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    if (!email || !password || !username) {
      return toast.error("Fill all required fields");
    } else {
      try {
        e.target.innerHTML = "Wait...";
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(result.user, {
          displayName: username,
        });
        toast.success("Sign Up Success");
        localStorage.setItem("admin", JSON.stringify(result));
        setUserInfo({
          userIn: true,
          userID: result.user.uid,
          userName: result.user.providerData[0].displayName,
        });
        emailRef.current.value = "";
        passwordRef.current.value = "";
        usernameRef.current.value = "";
        e.target.innerHTML = "sgin up";
        closeRef.current.click();
      } catch (error) {
        toast.error("Sign Up  Failed");
        e.target.innerHTML = "sgin up";
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div
        className="modal fade"
        id="sgin-in"
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
                sgin up
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
              <form action="">
                <Input
                  ref={usernameRef}
                  id="text"
                  type="text"
                  placeholder="UserName"
                  name="username"
                />
                <Input
                  ref={emailRef}
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <Input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="true"
                />
              </form>
            </div>
            <div className="modal-footer">
              <SginUpButton onClick={handleSignUp}>sgin up</SginUpButton>
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
const SginUpButton = styled.span`
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
export default ModalSginUp;
