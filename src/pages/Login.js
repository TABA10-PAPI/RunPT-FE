import React from "react";
import '../App.css';
import './Login.css'

function Login(){
    return (
    <div className="container"> 
      {/* container는 너가 App.css에서 만든 전체 검정 배경 등 */}

        <h1 className="welcome-title font-bold">환영합니다.</h1>

        <p className="welcome-subtitle font-semibold">
          <span className="runpt-text font-semibold">RunPT</span>로<br />
          스마트한 러닝을 시작해보세요.
        </p>

        {/* 중앙 큰 이미지(보라→파랑 gradient 아이콘) */}
        <img 
          src="/assets/runpt-main.png" 
          alt="RunPT Main Logo" 
          className="main-logo"
        />

        {/* 로그인 버튼들 */}
        <div className="login-buttons">

          {/* 네이버 */}
          <button className="login-btn naver-btn">
            <img src="/naver_phone.png" alt="Naver" className="icon" />
          </button>

          {/* 카카오 */}
          <button className="login-btn kakao-btn">
            <img src="/kakao_phone.png" alt="Kakao" className="icon" />
          </button>

        </div>

      </div>
  );
}
export default Login;