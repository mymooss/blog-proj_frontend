import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // 상태 변수 설정
  const [data, setData] = useState([]);

  // 컴포넌트가 마운트될 때 실행되는 효과 훅
  useEffect(() => {
    // Axios를 사용하여 GET 요청 보내기
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);  // 서버로부터 받아온 데이터를 상태 변수에 저장
      })
      .catch(error => {
        console.error('Error fetching data:', error);  // 에러 발생 시 에러 로그 출력
      });
  }, []);  // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행

  // JSX를 반환하여 화면 표시
  return (
    <div className="App">
      <h1>GET 요청 예시</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;