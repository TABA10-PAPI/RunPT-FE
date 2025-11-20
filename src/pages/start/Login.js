import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../Oauth/Oauth";

function Login() {
  const KakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  const navigate = useNavigate();

  const goNext = () => {
    navigate("/login"); // 시작하기 이후 로그인 페이지로 이동한다고 가정
  };

  return (
    <div className="container">
      {/* container 전체 검정 배경 */}
      <h1 className="login-title font-bold">환영합니다.</h1>

      <p className="login-subtitle font-semibold">
        <span className="runpt-text font-semibold">RunPT</span>로<br />
        스마트한 러닝을 시작해보세요.
      </p>

      <img
        src="/assets/logo.png"
        alt="RunPT Main Logo"
        className="login-logo"
      />

      <div className="login-buttons">
        <button className="login-btn kakao-btn" onClick={KakaoLogin}>
          <img src="/assets/kakao_phone.png" alt="Kakao" className="icon" />
        </button>

        <button className="login-btn naver-btn" onClick={NaverLogin}>
          <img src="/assets/naver_phone.png" alt="Naver" className="icon" />
        </button>
      </div>
    </div>
  );
}
export default Login;
