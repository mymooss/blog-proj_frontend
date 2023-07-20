import React from 'react'
import { useState } from 'react';
//import axios from 'axios';
import '../../styles/signuppage.css';

const SignUpPage = () => {
    // 이메일, 비밀번호/중복확인, 닉네임, 전화번호 state
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [confirmPasswordMsg,setConfirmPasswordMsg] = useState('')
    const [nickname, setNickname] = useState('')
    const [phoneNum, setPhoneNum] = useState()

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    };

    const onConfirmPasswordHendler = (e) => {
        const currentPasswordConfirm = e.target.value;
        setConfirmPassword(currentPasswordConfirm);

        if(password !== currentPasswordConfirm){
            setConfirmPasswordMsg('비밀번호가 일치하지 않습니다.')
        }
        else {
            setConfirmPasswordMsg('')
        } //어떻게 하지...?
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    };

    const onChangePhoneNum = (e) => {
        setPhoneNum(e.target.value)
    }
    
    // 중복검사 함수

    const URL = 'http://127.0.0.1:8080';

    // 가입 함수
    const register = () => {
        //e.preventDefault();

        axios
            //보내기
            .post(URL+'/api/account/register', {
                email: email,
                password: password,
                nickname: nickname,
                phone: phoneNum,
            })
            //받아오기
            /*
            {
                "jwt" : {
                    "access" : "dfalsdkfj;alskdjf;lak",
                    "refresh" :  "fas;dfjas;ldfha;lsdfjaw;ef"
                }
            }
            */
            .then((response) =>{
                localStorage.setItem('access_token', response.data.access); 
                localStorage.setItem('refresh_token', response.data.refresh);
                
                //localStorage.setItem('token', response.data.jwt );
                //console.log('User token', response.data.jwt)

                // axio     s.defaults.headers['Authorization'] =
                //     'JWT ' + localStorage.getItem('access_token');
                // navigate('/');
            })
    }
        


    return (
        <div className="signUpFormBox">
            <div>
                <form className="signUpForm">
                    <h4>아이디</h4>
                    <input className='inputId' placeholder="이메일을 입력하세요" type="email" value={email} onChange={onChangeEmail}></input>
                    <input className="overLapBtn" value={"중복"} type="submit" ></input>
                    
                    <h4>비밀번호</h4>
                    <input placeholder="비밀번호를 입력하세요" type="password" onChange={onChangePassword}></input><br></br>
                    <input placeholder="뭐라고 쓰징...." type="password" value={confirmPassword} onChange={onConfirmPasswordHendler}></input>
                    <p>{confirmPasswordMsg}</p>
                    
                    <h4>닉네임</h4>
                    <input placeholder="닉네임을 입력하세요" type='text' value={nickname} onChange={onChangeNickname}></input>
                    
                    <h4>전화번호</h4>
                    <input placeholder="전화번호를 입력하세요" type="number" value={phoneNum} onChange={onChangePhoneNum}></input>

                </form>
                <input className='signUpBtn' value={'가입하기'} type="submit" /*onClick={register}*/></input>
            </div>
        </div>
    )
}

export default SignUpPage;