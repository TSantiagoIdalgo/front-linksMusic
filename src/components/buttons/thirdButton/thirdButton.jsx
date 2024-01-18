import Style from './thirdButton.module.css'
import { useLocation, NavLink } from 'react-router-dom'

export default function ThirdButton({ text, type, navigate, style, img }) {
    const location = useLocation().pathname
    
    return <NavLink to={navigate} className={Style.button_container}>
        { img && <img src={img} alt="" className={Style.img} /> }
        <button 
          className={`${location.includes(navigate)
            ? Style.button_active
            : Style.button}`} 
          type={type}
          style={style}>{text}</button>
    </NavLink>
}