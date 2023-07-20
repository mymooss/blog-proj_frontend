import React from "react";
import '../../styles/mainpost.css';
const MainPost = () => {
    return (
    <div className='mainP'>
        <h1 className='mainTitle'>영화로운 일상</h1>
        <p className='date'>2023.07.03</p>
        <img src="https://via.placeholder.com/800x480" alt="샘플이미지"></img>
        <p className='mainText'
		style={{
			webkitBoxOrient: "vertical",
			}}>
			사소한 아름다움을 발견하는 재능으로 만든 영화 '더 테이블'. 수많은 사람이 오가는 자리에는 수많은 이야기가 남기 마련이다. 그렇게 생각하면 이 세상은 관객이 없는 수많은 영화로 둘러싸인 상영관일지도 모르겠다. 를 연출한 김종관 감독의 신작 은 어쩌면 그런 세상에 대한 예민한 관심과 기민한 시선을 지닌 어느 특별한 관객이 수집한 영화들일지도 모르겠다. 은 정확히 각기 다른 네 쌍의 커플이 하나의 테이블에 앉았다 일어나는 사이에 나눈, 네 가지 대화를 나열한 작품이다. 각자의 입으로 발음하는 말에는 전할 수 없는 마음의 안타까움과, 무심코 뱉어버린 진심의 민망함과, 다가가고 싶은 진심의 경로를 찾지 못한 조급함과, 상대의 진의를 알 수 없어 느껴지는 불안함과, 낯선 이에게 전하게 되는 뜻밖의 마음 씀씀이와...</p>
    </div> 
    )
}

export default MainPost;