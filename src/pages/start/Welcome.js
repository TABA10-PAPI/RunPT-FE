import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  const goNext = () => {
    navigate("/login"); // 시작하기 이후 로그인 페이지로 이동한다고 가정
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="welcome-content">
      <img src="assets/logo.png" alt="logo" className="welcome-logo" />
      <h1 className="welcome-title font-bold">RunPT</h1>

      <p className="welcome-subtitle font-semibold">
        AI가 만드는 나만의 러닝 코치
      </p>
      </div>
      <button className="big-button" onClick={goNext}>
        시작하기
      </button>
    </div>
  );
}

export default Welcome;
