import Style from './userRegister.module.css'
import UserRegisterData from './userRegisterData/userRegisterData'


const UserRegister = ({ handleChange }) => {
  return (
    <div className={Style.login}>
      <h1 className={Style.login_template_tittle}>Register in to Links Music</h1>
      <UserRegisterData handleChange={handleChange}/>
    </div>
  )
}

export default UserRegister