import React from 'react'
import '../CSS-files/Header.css'
import { CgProfile } from 'react-icons/cg';
import { MdNotifications } from 'react-icons/md';
const Header = () => {
  return (
    <>
      <nav>
        <h1>Table 4 Free</h1>
        <input type="text" name="" id="" placeholder='...Search' />
        <div className="profile">
          <MdNotifications style={{ color: 'blue', fontSize: '30px',marginRight:'2rem' }} />
          <CgProfile style={{ color: 'gray', fontSize: '30px' }} />
        </div>
      </nav>
    </>
  )
}

export default Header