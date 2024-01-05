import Style from './playData.module.css'

export default function PlayData ({ image, name }) {
    return (
        <div className={Style.data}>
          <img src={image} alt={name}/>
          <div className={Style.data_tittle}>
            <h2>{name}</h2>
          </div>
        </div>
    )
}