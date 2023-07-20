import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/signuppage.css';

const SignUpPage = () => {
  const initData = Object.freeze({
    email: '',
    password: '',
    nickname: '',
  });

  const [data, setData] = useState(initData);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };
  
  //
  const [confirmPassword,setConfirmPassword] = useState('')
  const [confirmPasswordMsg,setConfirmPasswordMsg] = useState('')

  const onConfirmPasswordHendler = (e) => {
      setConfirmPassword(e.target.value);
  }

  useEffect(() => {
            //  console.log("password : ", data.password);
            //  console.log("confirmPasswordMsg : ", confirmPasswordMsg)
            if(data.password !== confirmPassword){
                setConfirmPasswordMsg('비밀번호가 일치하지 않습니다.')
            }
            else {
                setConfirmPasswordMsg('')
            }
          }, [data.password, confirmPassword ]      
  )
//

  const handleSubmit = async () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    const URL = 'http://127.0.0.1:8080';
    axios
      .post(URL + '/api/account/register', {
        nickname: data.nickname,
        email: data.email,
        password: data.password,
      }, { headers })
      .then((response) => {
        alert(response.data.msg);
        console.log(response);
      })
      .catch((error) => {
        console.error('Error:', error);
        error.message === "Request failed with status code 403"?
        alert("아이디 중복입니다."):alert("오류");
      });
  };

  return (
    <div className="signUpFormBox">
      <div>
        <form className="signUpForm">
          <h4>아이디</h4>
          <input
            className="inputId"
            placeholder="이메일을 입력하세요"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          ></input>
          <input
            className="overLapBtn"
            value={"중복"}
            type="submit"
          ></input>
          <h4>비밀번호</h4>
          <input
            placeholder="비밀번호를 입력하세요"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          ></input>
          <br></br>
          <input
            placeholder="다시 입력하세요"
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={onConfirmPasswordHendler}
          ></input>
          <p>{confirmPasswordMsg}</p>
          <h4>닉네임</h4>
          <input
            placeholder="닉네임을 입력하세요"
            name="nickname"
            value={data.nickname}
            onChange={handleChange}
          ></input>
        </form>
        <input
          className="signUpBtn"
          value={"가입하기"}
          type="submit"
          onClick={handleSubmit}
        ></input>
      </div>
    </div>
  );
};

export default SignUpPage;
      