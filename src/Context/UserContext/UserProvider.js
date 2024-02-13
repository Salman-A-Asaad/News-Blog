import React, { useState } from "react";
import UserContext from "./Context";
const UserProvider = ({ children }) => {
  const userIn = localStorage.getItem("admin") == null ? false : true;
  const userID =
    localStorage.getItem("user") == null
      ? ""
      : JSON.parse(localStorage.getItem("admin")).user.uid;
  const userName =
    localStorage.getItem("user") == null
      ? ""
      : JSON.parse(localStorage.getItem("admin")).user.providerData[0]
          .displayName == null
      ? "user"
      : JSON.parse(localStorage.getItem("admin")).user.providerData[0]
          .displayName;
  const [userInfo, setUserInfo] = useState({
    userIn: userIn,
    userID: userID,
    userName: userName,
  });
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
