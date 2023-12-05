import Style from './userRegistered.module.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/button/button'

const Registered = () => {
  const navigate = useNavigate()
  
  return (
    <div className={Style.registered}>
      <h2>Successfully registered!</h2>
      <p>We have sent an email to your email address to confirm your account</p>
      <Button text={'Back'} onClick={() => navigate('/')} width={240}/>
    </div>
    ) 
  }

export default Registered