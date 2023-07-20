import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/mainpage';
import Postlist from './pages/postlistpage'
import Postpage from './pages/postpage'
import Signin from './pages/signinpage';
import Signup from './pages/signuppage';
import Nav from './components/Nav';
import Writepost from './components/postPage/WritePost';


const App = () => {
  return (
	<BrowserRouter>
      <Header />
      <Nav>
        {/* <NavLink to='/signup'>회원가입</NavLink> */}
      </Nav> 
      <div style={{width:'800px', 
                  margin:'auto',
                  display:'flex'}}>
      <Routes>
        <Route path="/" element ={<Main/>} />
        <Route path="/header" element = {<Header />} />
        <Route path='/postlist' element = {<Postlist />} />
        <Route path='/postpage' element = {<Postpage />} />
        <Route path='/signin' element = {<Signin />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/writepost' element = {<Writepost />} />
      </Routes>
      </div>
      <Footer />
  </BrowserRouter>
  );

}
export default App;