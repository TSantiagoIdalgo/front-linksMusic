import { useState } from 'react'
import Style from './login.module.css'
import UserLogin from './userLogin/userLogin'
import UserRegister from './userRegister/userRegister'

export default function Login () {
    const [handle, handleChange] = useState(false)
  return (
    <section className={Style.login}>
      <div className={Style.login_template}>
        {handle 
        ? <UserRegister handleChange={handleChange}/> 
        : <UserLogin handleChange={handleChange}/>}
      </div>
    </section>
  )
}