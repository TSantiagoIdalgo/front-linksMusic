import Style from './nav.module.css'
import { NavLink } from 'react-router-dom'
import userIcon from '../../../assets/icons/user-icon.png'
import Logo from '../../logo/logo'

const Nav = () => {

    return (
        <nav className={Style.nav}>
            <Logo/>
            <div className={Style.navLinks}>
                <NavLink to='#'>Music Player</NavLink>
                <NavLink to='#'>Download</NavLink>
                <NavLink to='#'>About</NavLink>
                <figure className={Style.userIcon}>
                    <img src={userIcon} alt="user" />
                </figure>
            </div>
        </nav>
    )
}

export default Nav