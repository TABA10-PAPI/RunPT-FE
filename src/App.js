import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/600.css"; // Semi-bold
import "@fontsource/inter/700.css"; // Bold

import Welcome from './pages/start/Welcome.js';
import Login from './pages/start/Login.js';
import Join from './pages/start/Join.js';
import Home from './pages/home/Home.js';
import NaverCallback from "./pages/Oauth/NaverCallback.js";
import KakaoCallback from "./pages/Oauth/KakaoCallback.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/home" element={<Home />} />
        <Route path="/oauth/kakao" element={<KakaoCallback />} />
        <Route path="/oauth/naver" element={<NaverCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
