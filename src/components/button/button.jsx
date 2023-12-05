import Style from './button.module.css'
import { useWindow } from '../../util/hook/window/useWindow'

const Button = ({text, onClick, width=200}) => {
    const { viewportWidth } = useWindow()
    return (
        <button className={Style.form_button} onClick={onClick} 
        style={{width: `${viewportWidth <= 800 ? 150 + 'px' : width + 'px'}`}}>{text}</button>
    )
}

export default Button