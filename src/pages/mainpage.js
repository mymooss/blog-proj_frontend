import {Link} from 'react-router-dom'
import MainPost from '../components/mainPage/MainPost';
import MoreBar from '../components/MoreBar';
import Contents from '../components/mainPage/Contents';
import React from 'react'
const Home = () => {
  return(
    <div>
        <Link to='/signup'>회원가입</Link>
        <Link to='/signin'>로그인</Link>
        <MainPost />
        <MoreBar />
        <div className="inner-box">
        <Contents />
        </div>
    </div>
  );
};

export default Home;
