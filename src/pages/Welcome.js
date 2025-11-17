import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Welcome() {
  const navigate = useNavigate();

  const goNext = () => {
    navigate('/login'); // 시작하기 이후 로그인 페이지로 이동한다고 가정
  };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <img
        src="assets/logo.png"
        alt="logo"
        style={{
          width: '180px',
          height: '180px',
          marginTop: '80px',
          marginBottom: '200px',
          objectFit: 'contain'
        }}
      />

      <button className="big-button" onClick={goNext}>
        시작하기
      </button>
    </div>
  );
}

export default Welcome;
