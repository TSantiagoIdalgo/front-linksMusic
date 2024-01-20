import Style from './userModal.module.css'
import userIcon from '../../../assets/icons/user-icon.png'
import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'

export default function UserModal() {
  const user = jwtDecode(window.localStorage.getItem('USER_INFO'))
  const [modal, handleModal] = useState(false)
  const userImg = window.localStorage.getItem('user')


  function handleLogout() {
    window.localStorage.removeItem('USER_INFO')
    window.localStorage.removeItem('user')
    window.location.href = '/'
  }

    return (
    <div className={Style.user_modal} onClick={() => handleModal(!modal)}>
      { userImg !== null 
          ? <img src={userImg} alt='user img' className={Style.user_picture_active}/>
          : <img src={userIcon} alt='user icon' className={Style.user_picture}/>}
        {modal &&
        <div className={Style.modal_container}>
          <img 
            src={`${userImg !== null ? userImg : userIcon}`} 
            alt="user" 
            className={`${userImg !== null ? Style.user_picture_active : Style.user_picture}`} />
          <div className={Style.modal_text}>
            <h2>{user.userName}</h2>
            <p>{user.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>}
    </div>
  )
}