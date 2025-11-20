import React from "react";
import "../../App.css";
import "./Login.css";

function Login() {
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const KAKAO_AUTH_URL =
    "https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code";
  const NAVER_AUTH_URL =
    "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}";

  const KakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <div className="container">
      {/* container 전체 검정 배경 */}
      <h1 className="login-title font-bold">환영합니다.</h1>

      <p className="login-subtitle font-semibold">
        <span className="runpt-text font-semibold">RunPT</span>로<br />
        스마트한 러닝을 시작해보세요.
      </p>

      <img src="/assets/logo.png" alt="RunPT Main Logo" className="login-logo" />

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
