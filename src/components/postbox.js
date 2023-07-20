import React from 'react'
import "../styles/postbox.css"

const postbox = () => {
  return (

    <div >
        <a className='postbox' href='/'>
            <p clasName='postbox_size'>
               <img src="assets/img/postimg.jpg" alt="logo" class="postimg"/>
               <h5 class='article_title'>딴짓하는 셰프들 3편 광교옥</h5>
               <h6 class='article'>곰탕을 끓이고, 탄탄멘 면을 뽑고, 식빵을 굽는다. 오랫동안 쌓아온 기술과 경험을 새롭게 우려내고 반죽한 국물 한 모금, 국수 한 가닥, 식빵 한 조각에 도전한다.</h6>
            </p>
        </a> 
     
    </div>
  )
}

export default postbox