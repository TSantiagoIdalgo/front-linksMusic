import Style from './primaryButton.module.css'

export default function PrimaryButton({ text, onClick, style}) {
    return (
    <button className={Style.button} onClick={onClick} style={style}>
      {text}
    </button>
  )
}