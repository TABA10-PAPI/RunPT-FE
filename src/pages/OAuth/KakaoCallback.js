import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function KakaoCallback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const sendCodeToBackend = async () => {
      try {
        const response = await axios.post(
          `API명세 후 수정`, //api endpoint
          { code },
          { headers: { "Content-Type": "application/json" } }
        );

        const { token } = response.data;

        localStorage.setItem("accessToken", token);
        navigate("/join");
      } catch (err) {
        console.error("카카오 로그인 처리 실패: ", err);
        alert("카카오 로그인 중 오류가 발생했습니다.");
        navigate("/login"); //로그인 창으로 다시 보내기
      }
    };
    sendCodeToBackend();
  }, [location, navigate]);
  return <div style={{ color: "white" }}>카카오 로그인 처리 중...</div>;
}
export default KakaoCallback;
