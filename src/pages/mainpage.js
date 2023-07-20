import {Link} from 'react-router-dom'
import MainPost from '../components/mainpage/mainpost';
import MoreBar from '../components/morebar';
import Contents from '../components/mainpage/contents';
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
