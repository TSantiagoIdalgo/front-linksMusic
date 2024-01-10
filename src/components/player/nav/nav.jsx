import SearchBar from '../searchbar/searchbar'
import Logo from '../../logo/logo'
import UserModal from '../user/userModal'
import Style from './nav.module.css'


export default function NavPlayer() {
    return (
        <nav className="nav">
            <div className={Style.logo}>
                <button type='button'>≡</button>
                <Logo/>
            </div>
            <SearchBar/>
            <UserModal/>
        </nav>
    )

}