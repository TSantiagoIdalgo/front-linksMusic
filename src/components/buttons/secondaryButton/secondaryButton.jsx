import Style from './secondaryButton.module.css'

const SecondaryButton = ({ text, style }) => {
    return (
        <button className={Style.button} style={style}>
            { text }
        </button>
    )
}

export default SecondaryButton;