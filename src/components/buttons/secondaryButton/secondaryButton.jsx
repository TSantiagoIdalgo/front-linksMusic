import Style from './secondaryButton.module.css'

const SecondaryButton = ({text, type, onClick, style}) => {
    return (
        <button className={Style.button} type={type} onClick={onclick} style={style}>
            { text }
        </button>
    )
}

export default SecondaryButton;