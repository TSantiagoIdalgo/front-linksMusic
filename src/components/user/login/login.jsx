import Style from './login.module.css'
import Logo from '../../logo/logo'
import { useGoogle } from '../../../hooks/network/google/useGoogle'
import { Link } from 'react-router-dom'
import LoginData from './loginData/loginData'
import GoogleLogin from 'react-google-login'

export default function Login() {
  const { clientId, signIn, signFailure } = useGoogle()

  return (
    <div className={Style.login}>
      <nav className={Style.login_nav}>
        <Link to={'/'}>
          <Logo/>
        </Link>
      </nav>
      <section className={Style.template}>
        <div className={Style.login_template}>
          <h1>Login in to Links Music</h1>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={signIn}
            onFailure={signFailure}
            cookiePolicy={'single_host_origin'}
            className={Style.login_google_button}
          />
          <div className={Style.login_middle}/>
          <LoginData/>
        </div>
      </section>
    </div>
  )
}