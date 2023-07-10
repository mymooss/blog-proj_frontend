import React from 'react';
import image from '../../img/1.png'
import '../../styles/commentbox.css'
const componentbox = (props)=>{
    return (
    <div>
        <div className='entire-com'>
            <div>
                <img id='profileimg'src={image} alt='profile'></img>
            </div>
            <div className='text'>
                <div id='nickname'>
                    <h4 style={{marginBottom:'0px'}}>
                    행복한 즐거운 세상
                    </h4>
                </div>
                <div id='comment'>
                    <p style={{marginTop:'0px'}}>좋은글이네요</p>
                </div>
            </div>
        </div>

    답글
    </div>
    )
}
export default componentbox