import Style from './logo.module.css'
import logo from '../../assets/icons/logo.png'

export default function Logo() {
    return (
        <div className={Style.logo}>
            <img src={logo} alt="logo" />
            <h1>Links Music</h1>
        </div>
    )
}