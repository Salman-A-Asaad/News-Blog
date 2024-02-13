import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import { Home, Contact, About, Search, Posts, MyPosts } from "./Pages/index";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Footer, User, Register } from "./Sections/index";
import { getAllData } from "./data/data";
import { Toaster } from "react-hot-toast";
import { UserContext } from "./Context/index";
function App() {
  const userInfo = useContext(UserContext).userInfo;
  const [types, setTypes] = useState([]);
  useEffect(() => {
    getAllData().then((data) => {
      setTypes(data);
    });
  }, []);

  return (
    <>
      <Router>
        {userInfo.userIn ? <User /> : <Register />}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home types={types} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourArticles" element={<Posts />} />
          <Route path="/myArticles" element={<MyPosts />} />
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </>
  );
}

export default App;
