import Style from './login.module.css'
import Logo from '../../logo/logo'
import { useGoogle } from '../../../hooks/network/google/useGoogle'
import { useFacebook } from '../../../hooks/network/facebook/useFacebook'
import { Link } from 'react-router-dom'
import LoginData from './loginData/loginData'
import GoogleLogin from 'react-google-login'
import ReactFacebookLogin from 'react-facebook-login'

export default function Login() {
  const { clientId, signIn, signFailure } = useGoogle()
  const { fbId, success, error } = useFacebook()

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
          <ReactFacebookLogin
            appId={fbId}
            callback={success}
            onFailure={error}
            autoLoad={false}
            fields="name,email,picture"
            textButton='Login with Facebook'
            icon="fa-facebook"
            cssClass={Style.login_facebook_button}
          />
          <div className={Style.login_middle}/>
          <LoginData/>
        </div>
      </section>
    </div>
  )
}