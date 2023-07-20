import React from "react";
import '../../styles/writepost.css'
const Write = (props) => { 
    return (
        <div>
            <div>
                <input type ='text' id="title_txt" placeholder="제목"></input>
            </div>
            <div>
                <textarea id="content_txt" placeholder="내용을 입력하세요."></textarea>
            </div>
            <div  id="post_submit">
                <button>등록</button>
            </div>
        </div>
    )
}
export default Write