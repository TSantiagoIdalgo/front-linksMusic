import Style from './playData.module.css'
import undefinedIcon from '../../../../assets/icons/player/undefinedIcon.png'

export default function PlayData ({ image, name }) {
  return (
    <div className={Style.data}>
      {image 
       ? <img src={image} alt={name} /> 
       : <div className={Style.undef}>
          <img src={undefinedIcon} alt={name}/>
         </div>}
      <div className={Style.data_tittle}>
        <h2>{name}</h2>
      </div>
    </div>
    )
}