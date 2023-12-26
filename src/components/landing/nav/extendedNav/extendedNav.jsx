import { NavLink } from 'react-router-dom';
import userIcon from '../../../../assets/icons/user-icon.png'
import Style from './extendedNav.module.css'

const ExtendedNav = () => {
  return (
    <div className={Style.extendedNav}>
        <div className={Style.navLinks}>
         <NavLink to='#'>Music Player</NavLink>
         <NavLink to='#'>Download</NavLink>
         <NavLink to='#'>About</NavLink>
         <figure className={Style.userIcon}>
          <img src={userIcon} alt="user" />
          </figure>
        </div>
    </div>
  )
}

export default ExtendedNav;