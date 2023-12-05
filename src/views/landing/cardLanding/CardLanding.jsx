import Style from './CardLanding.module.css'

const CardLanding = ({ img, tittle, p }) => {
    return (
      <div className={Style.info_card}>
        <img src={img} alt="card" />
        <span>{tittle}</span>
        <p>{p}</p>
      </div>
    )
}

export default CardLanding