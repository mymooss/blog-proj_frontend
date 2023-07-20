import React, { useState } from 'react';
import "../styles/login.css"

const Login=()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); //

  const handleLogin = () => {
    setIsLoggedIn(true);//
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const handleLogout = () => {//
    setIsLoggedIn(false);
  };

  return (
  
    <div className="loginmain">
      <div className="loginhead" >
        <img src="tistory로고.png" alt="logo" className="loginlogo"/>
        <img src="tistory로고.png" alt="logo" className="loginlogo2"/>
      </div>
      {isLoggedIn ? (
        <>
          <p>로그인 상태입니다.</p>
          <button onClick={handleLogout} className="logout">로그아웃</button>
        </>
       ) : (
        <>
        <div className="id_box">
          <input
          type="text"
          placeholder="ID"
          className
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
        <button onClick={handleLogin} className="loginbutton">로그인</button>
        <br/>
        <div className="radio">
          <br/><br/>
          <input id="radio-1" name="radio" type="radio" checked/>
          <label for="radio-1" class="radio-label">로그인 상태 유지</label>
        </div>
        </div>
      </>
      )}
    </div>
  );
}

export default Login;