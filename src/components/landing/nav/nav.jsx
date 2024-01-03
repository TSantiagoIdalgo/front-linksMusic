import Style from './nav.module.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import userIcon from '../../../assets/icons/user-icon.png'
import Logo from '../../logo/logo'
import { useWindowSize } from '../../../hooks/window/useWindow'
import ExtendedNav from './extendedNav/extendedNav'

const Nav = () => {
  const [handle, handleChange] = useState(false)
  const widthVW = useWindowSize()
  return (
    <nav className={Style.nav}>
      <Logo/>
      {widthVW >= 800 
      ? <div className={Style.navLinks}>
         <NavLink to='#'>Music Player</NavLink>
         <NavLink to='#'>Download</NavLink>
         <NavLink to='#'>About</NavLink>
         <NavLink to='/login' className={Style.userIcon}>
          <img src={userIcon} alt="user" />
          </NavLink>
        </div>
      : <button onClick={() => handleChange(!handle)} className={Style.navBtn}>
        {handle ? 'x' : '≡'}
        </button>}
      {handle && <ExtendedNav/>}
    </nav>
  )
}

export default Nav