import Style from './userLogin.module.css'
import UserData from "./userData/userData"
import GoogleLogin from 'react-google-login'
import ReactFacebookLogin from 'react-facebook-login'
import { useFacebookSucces } from '../../../util/hook/login/facebook/useFacebookSuccess'
import { useGoogleSuccess } from '../../../util/hook/login/google/useGoogleSuccess'

const UserLogin = ({ handleChange }) => {
  const { onFacebookSuccess } = useFacebookSucces()
  const { onSuccess, clientID } = useGoogleSuccess()
  return (
    <div className={Style.login}>
      <h1 className={Style.login_template_tittle}>Login in to Links Music</h1>
      <GoogleLogin
      clientId={clientID}
      onSuccess={onSuccess}
      cookiePolicy={'single_host_policy'}
      className={Style.googleButton}/>
      <ReactFacebookLogin
      appId='1044204530160777'
      autoLoad={false}
      fields='name,email,picture'
      callback={onFacebookSuccess}
      buttonStyle={{width: 400 + 'px', height: 50 + 'px'}}/>
      <div className={Style.login_template_line}/>
      <UserData handleChange={handleChange}/>
    </div>
    )
}

export default UserLogin