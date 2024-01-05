import SearchBar from '../searchbar/searchbar'
import Logo from '../../logo/logo'
import UserModal from '../user/userModal'

export default function NavPlayer() {
    return (
        <nav className="nav">
            <Logo/>
            <SearchBar/>
            <UserModal/>
        </nav>
    )

}