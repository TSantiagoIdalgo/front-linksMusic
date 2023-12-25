import Style from './mainSection.module.css'
import Nav from '../../nav/nav';
import PhoneImage from '../../../../assets/bg/main-phone.png'
import SecondaryButton from '../../../buttons/secondaryButton/secondaryButton';

const MainSection = () => {
    return (
    <section className={Style.mainSection}>
      <Nav/>
      <div className={Style.main_info}>
        <div className={Style.main_info_text}>
          <p>Listen and download all the music you want</p>
          <SecondaryButton text="Get Started" style={{ width: '300px' }}/>
        </div>
        <img src={PhoneImage} alt="phone" />
      </div>
    </section>
  )
}

export default MainSection;