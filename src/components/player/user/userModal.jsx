import Style from './userModal.module.css'
import userIcon from '../../../assets/icons/user-icon.png'

export default function UserModal() {
  const userImg = window.localStorage.getItem('user')
    return (
    <div className={Style.user_modal}>
      { userImg !== null 
          ? <img src={userImg} alt='user img' className={Style.user_picture_active}/>
          : <img src={userIcon} alt='user icon' className={Style.user_picture}/>}
    </div>
  )
}