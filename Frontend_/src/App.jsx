import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreatePost from "./Pages/CreatePosts";
import Feed from "./Pages/Feed";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
};

export default App;
