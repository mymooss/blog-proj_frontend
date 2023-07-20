import React, {useEffect,useRef,useState} from "react"; //훅 사용
import "../styles/nav.css"


const Nav = ({ width=280, children }) => { 
    const [isOpen, setOpen] = useState(false); //초기값을 false로 설정함/ 열려있으면 true,닫혀 있으면 false
    const [xPosition, setX] = useState(-width);
    const side = useRef();
    
    // button 클릭 시 토글
    const toggleMenu = () => {
      if (xPosition < 0) {
        setX(0);  
        setOpen(true);
      } else {
        setX(-width);
        setOpen(false);
      }
    };
    
    // 사이드바 외부 클릭시 닫히는 함수
    const handleClose = async e => {
      let sideArea = side.current;
      let sideCildren = side.current.contains(e.target);
      if (isOpen && (!sideArea || !sideCildren)) {
        await setX(-width); 
        await setOpen(false);
      }
    }
  
    useEffect(()=> {
      window.addEventListener('click', handleClose);
      return () => {
        window.removeEventListener('click', handleClose);
      };
    })
  
  
    return (
      <div className="container">
        <div ref={side}  className="sidebar" style={{ width: `220px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
            <button onClick={() => toggleMenu()}
            className="button" >
              {isOpen ? //사이드바의 열림/닫힘 상태를 나타내는 상태 변수
                <div className="button_menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div> : <span>x</span>
              }

            </button>
          <div className="content">
              <ul>
                <li className="menu"><a href="/">홈</a></li>
                <li className="menu"><a href="">태그</a></li>
                <li className="menu"><a href="/postpage">Movie</a></li>
                <ul>
                 <li className="view"><a href="">Preview</a></li>
                 <li className="view"><a href="">review</a></li>
                </ul>
                <li><a href="">Music</a></li>
                <li><a href="">Food</a></li>
                <li><a href="">Life Style</a></li>
            </ul>
          </div> 
        </div>
      </div>
    );
  };
export default Nav //버튼 만드는거 실패작