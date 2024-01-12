import { useState } from 'react'
import ExtendedNav from './extendedNav/extendedNav'
import SearchBar from '../searchbar/searchbar'
import Logo from '../../logo/logo'
import UserModal from '../user/userModal'
import Style from './nav.module.css'


export default function NavPlayer() {
    const [extend, handleExtend] = useState(false)
    return (
        <nav className="nav">
            <div className={Style.logo}>
                <button type='button' onClick={() => handleExtend(!extend)} className={Style.button}>≡</button>
                <Logo/>
                {extend && <ExtendedNav handleExtend={handleExtend}/>}
            </div>
            <SearchBar/>
            <UserModal/>
        </nav>
    )

}

