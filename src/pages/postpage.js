import React from "react";
import {Link} from 'react-router-dom';
import MainPost from "../components/mainPage/MainPost";
import Comments from "../components/postPage/Comments";
const postpage= () => {
    return(
        <div>
            {/* <div>
                {this.state.login
                ?<h5><Link to = '../components/postpage/writepost'> 포스트 작성</Link></h5>
            :null
            } 
            </div>*/}
            <div>
            <Link to = '/writepost'> 포스트 작성</Link>
            </div>
            < MainPost/>
            < Comments/>
            
        </div>
    )
}
export default postpage;