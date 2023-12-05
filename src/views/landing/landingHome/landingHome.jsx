import Style from './landingHome.module.css'
import { NavLink } from 'react-router-dom'
import smartImg from '../../../assets/image/source/smarphone.png'

export default function LandingHome () {
  return (
    <section className={Style.landing}>
      <article className={Style.landing_data}>
        <div className={Style.landing_data_tittle}>
          <p>Listen, save and download all the music you want</p>
          <NavLink to='/download'>Download</NavLink>
        </div>
        <img src={smartImg} alt="smartphone" />
        <div className={Style.landing_clip}/>
      </article>
    </section>
    )
}