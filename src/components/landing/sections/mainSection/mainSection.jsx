import Style from './mainSection.module.css'
import Nav from '../../nav/nav';
import PhoneImage from '../../../../assets/bg/main-phone.webp'
import SecondaryButton from '../../../buttons/secondaryButton/secondaryButton';

const MainSection = () => {
    return (
    <section className={Style.mainSection}>
      <Nav/>
      <article className={Style.main_info}>
        <div className={Style.main_info_text}>
          <p>Listen and download all the music you want</p>
          <SecondaryButton text="Get Started" style={{ width: '225px', height: '50px' }}/>
        </div>
        <img src={PhoneImage} alt="phone" />
      </article>
      <div className={Style.landing_clip_path}/>
    </section>
  )
}

export default MainSection;