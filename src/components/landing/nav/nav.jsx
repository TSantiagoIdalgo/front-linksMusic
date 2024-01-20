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
  const userImg = window.localStorage.getItem('user')

  return (
    <nav className={Style.nav}>
      <Logo/>
      {widthVW >= 800 
      ? <div className={Style.navLinks}>
         {userImg !== null ? <NavLink to='/musicplayer/home'>Music Player</NavLink> : <NavLink to='/login'>Music Player</NavLink>}
         <NavLink to='#'>Download</NavLink>
         <NavLink to='#'>About</NavLink>
         <NavLink to={`${userImg !== null ? '/musicPlayer/home' : '/login'}`} className={Style.userIcon}>
          { userImg !== null 
          ? <img src={userImg} alt='user img' className={Style.user_picture_active}/>
          : <img src={userIcon} alt='user icon' className={Style.user_picture}/>}
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