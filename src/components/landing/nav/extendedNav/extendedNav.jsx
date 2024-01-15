import { NavLink } from 'react-router-dom';
import userIcon from '../../../../assets/icons/user-icon.png'
import Style from './extendedNav.module.css'

const ExtendedNav = () => {
  const userImg = window.localStorage.getItem('user')
  return (
    <div className={Style.extendedNav}>
        <div className={Style.navLinks}>
         <NavLink to='/musicplayer/home'>Music Player</NavLink>
         <NavLink to='#'>Download</NavLink>
         <NavLink to='#'>About</NavLink>
         <NavLink to='/login' className={Style.userIcon}>
          { userImg !== null 
          ? <img src={userImg} alt='user img' className={Style.user_picture_active}/>
          : <img src={userIcon} alt='user icon' className={Style.user_picture}/>}
          </NavLink>
        </div>
    </div>
  )
}

export default ExtendedNav;