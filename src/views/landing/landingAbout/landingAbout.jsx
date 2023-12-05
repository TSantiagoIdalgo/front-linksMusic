import Style from './landingAbout.module.css'
import { NavLink } from 'react-router-dom'
import PersonImg from '../../../assets/image/source/persona1.png'

export default function LandingAbout() {
  return (
    <section className={Style.about} id='about'>
        <div className={Style.about_tittle}>
          <h2>The <span>highest loyalty</span> on the market</h2>
          <div className={Style.about_tittle_p}>
            <p>Without any type of audio loss or compression, your favorite music at its best with our services.</p>
            <p>You will no longer have to worry about running out of space on your cell phone and having to delete those songs to which you are love.</p>
            <p>Up to 10 GB of storage so you can save the music you need and stop it depending on your local storage.</p>
            <NavLink to='/about'>See more <span> ➜</span></NavLink>
          </div>
        </div>
        <img src={PersonImg} alt="person" />
    </section>
  )
}