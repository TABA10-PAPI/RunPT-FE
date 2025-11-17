import React from "react";
import '../App.css';
import './Login.css'

function Login(){
    // const REST_API_KEY = "API_KEY";
    // const REDIRECT_URI = "URI";

    const link = 'https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code';

    const loginHandler = () => {
        window.location.href = link;
    }
    return (


    <div className="container login-page"> 
      {/* container 전체 검정 배경 */}
            <h1 className="welcome-title font-bold">환영합니다.</h1>

            <p className="welcome-subtitle font-semibold">
            <span className="runpt-text font-semibold">RunPT</span>로<br />
            스마트한 러닝을 시작해보세요.
            </p>

            <img 
            src="/assets/runpt-main.png" 
            alt="RunPT Main Logo" 
            className="main-logo"
            />

            <div className="login-buttons">

            <button className="login-btn naver-btn">
                <img src="/assets/naver_phone.png" alt="Naver" className="icon" />
            </button>

            <button className="login-btn kakao-btn" onClick={loginHandler}>
                <img src="/assets/kakao_phone.png" alt="Kakao" className="icon" />
            </button>

            </div>
        </div>
  );
}
export default Login;