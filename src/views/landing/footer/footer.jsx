import Style from './footer.module.css'
import Logo from '../../../components/logo/logo'
import redImg from '../../../assets/image/icon/redes.png'

export default function Footer () {
  return (
    <footer className={Style.footer}>
      <Logo/>
      <div className={Style.footer_links}>
      <h2>WEB LINKS</h2>
        <span>Assistance</span>
        <span>Reproduction web</span>
        <span>App for mobiles</span>
      </div>
      <div className={Style.footer_links}>
        <h2>COMPANY</h2>
        <span>About</span>
        <span>Employment</span>
        <span>For the record</span>
      </div>
        <img src={redImg} alt="redes" className={Style.footer_img}/>
      <div className={Style.footer_legal}>
        <span>Legal</span>
        <span>Privacy policies</span>
        <span>Accessibility</span>
      </div>
    </footer>
    )
}