import React from 'react'

const Nav = () => {
  return (
    <nav>
        <img 
        alt='Netflix logo'
        src="http://www.w3.org/1999/xlink"
        className='nav_logo'
        onClick={() => window.location.reload()}
        />
    </nav>
  )
}

export default Nav