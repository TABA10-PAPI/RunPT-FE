import React, { useState } from "react";
import "../../App.css";
import "./Join.css";

function Join() {
  const [nickname, setNickname] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    if (!nickname || !height || !weight || !age) {
      alert("모든 항목을 입력해줘");
      return;
    }

    const data = { nickname, height, weight, age };
    console.log("Join Data:", data);

    // 제출 처리 (예: 서버 전송 or 다음 페이지 이동)
  };

  return (
    <div className="container">
      <h1 className="join-title font-bold">RunPT</h1>
      <h1 className="join-subtitle font-bold">신체정보를 입력하고 <br/>내 몸에 맞는 러닝을 시작해보세요!</h1>

      <div className="join-form">
        <div className="join-input-group">
          <label>닉네임</label>
          <input
            type="text"
            placeholder="닉네임 입력"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div className="join-input-group">
          <label>키 (cm)</label>
          <input
            type="number"
            placeholder="키 입력"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="join-input-group">
          <label>체중 (kg)</label>
          <input
            type="number"
            placeholder="체중 입력"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="join-input-group">
          <label>나이</label>
          <input
            type="number"
            placeholder="나이 입력"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>

      <button className="big-button" onClick={handleSubmit}>
        완료
      </button>
    </div>
  );
}

export default Join;
