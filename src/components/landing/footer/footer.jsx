import Style from './footer.module.css'
import Logo from '../../logo/logo';
import GoogleIcon from '../../../assets/icons/networks/google-logo-240.png'
import FBIcon from '../../../assets/icons/networks/facebook-circle-logo-240.png'
import LDIcon from '../../../assets/icons/networks/linkedin-logo-240.png'

const Footer = () => {
    return (
    <footer className={Style.footerContainer}>
      <div className={Style.footer}>
      <div>
        <Logo/>
      </div>
      <div className={Style.footerCards}>
      <FooterCard text={['WEB LINKS:', 'Assitance', 'Reproduction web', 'App for mobiles']}/>
      <FooterCard text={['COMPANY:', 'About', 'Employment', 'For the record']}/>
      </div>
      <div className={Style.footerImages}>
      <img src={GoogleIcon} alt="google" />
      <img src={FBIcon} alt="facebook" />
      <img src={LDIcon} alt="linkedin" />
      </div>
      </div>
      <h2>Made with 💜 by Tomás Idalgo</h2>
    </footer>
  );

}

const FooterCard = ({ text }) => {
  return (
    <div className={Style.footerCard}>
      {text?.map((a, index) => (
        <span key={index}>{a}</span>
        ))}
    </div>
  )
}

export default Footer;