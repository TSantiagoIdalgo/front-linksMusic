import Style from './navbar.module.css'
import Logo from '../logo/logo'
import userIcon from '../../assets/image/icon/user.png'
import { Link, NavLink } from 'react-router-dom'
import { useLocalUser } from '../../util/hook/localStorage/localStorege'

export default function Navbar () {
  const { userInfo } = useLocalUser()
  
    return (
      <header className={Style.navbar}>
        <Logo/>
        <div className={Style.navbar_navigates }>
          <div className={Style.navbar_navigates_links}>
            <NavLink to='/MusicPlayer'>Music Player</NavLink>
            <a href="#download">Download</a>
            <a href="#about">About</a>
          </div>
          <span className={Style.navbar_navigates_middle}/>
          <Link to='/login'>
            <img src={userInfo.imageUrl ? userInfo.imageUrl : userIcon} 
            alt="user" 
            className={`${userInfo.imageUrl ? Style.userImg : Style.unknowImg }`}/>
          </Link>
        </div>
      </header>
    )
}