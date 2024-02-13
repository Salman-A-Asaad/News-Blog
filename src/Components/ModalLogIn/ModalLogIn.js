import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { UserContext } from "../../Context/index";
const ModalLogIn = () => {
  const setUserInfo = useContext(UserContext).setUserInfo;
  const emailRef = useRef();
  const passwordRef = useRef();
  const closeRef = useRef();
  const handleLogIn = async (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      return toast.error("Fill all required fields");
    } else {
      try {
        e.target.innerHTML = "Wait...";
        const result = await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login Success");
        localStorage.setItem("admin", JSON.stringify(result));
        setUserInfo({
          userIn: true,
          userID: result.user.uid,
          userName:
            result.user.providerData[0].displayName == null
              ? "user"
              : result.user.providerData[0].displayName,
        });
        emailRef.current.value = "";
        passwordRef.current.value = "";
        e.target.innerHTML = "log in";
        closeRef.current.click();
      } catch (error) {
        toast.error("Login Failed");
        e.target.innerHTML = "log in";
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div
        className="modal fade"
        id="log-in"
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
                log in
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
                  ref={emailRef}
                  id="email-log-in"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <Input
                  ref={passwordRef}
                  id="password=log-in"
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="true"
                />
              </form>
            </div>
            <div className="modal-footer">
              <LogInButton onClick={handleLogIn}>log in</LogInButton>
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
const LogInButton = styled.span`
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
export default ModalLogIn;
