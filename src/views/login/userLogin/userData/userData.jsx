import Style from './userData.module.css'
import Input from "../../../../components/input/input";
import Button from '../../../../components/button/button'
import { useLogin } from '../../../../util/hook/login/useLogin';
import { NavLink } from 'react-router-dom';

const UserData = ({ handleChange }) => {
  const { register, handleSubmit, submit, errors, remember, setRemember} = useLogin()
  return (
    <form onSubmit={handleSubmit(submit)} autoComplete='off'>
      <div className={Style.login_form}>
        <Input register={register} name={'Email Adress'} error={errors} width={500}/>
        <Input register={register} name={'Password'} type={'password'} error={errors} width={500}/>
        <span className={Style.login_error}>{errors.login?.message}</span>
      </div>
      <div className={Style.login_btns}>
        <div className={Style.login_remember}>
          <button className={`${remember ? Style.login_btn_remember : Style.login_btn}`} 
          type='button' 
          onClick={() => setRemember(!remember)}>
            <span>-----</span>
          </button>
          <i>Remind me</i>
        </div>
        <NavLink to={'#'}>Forgot your password?</NavLink>
      </div>
      <div className={Style.login_btns}>
        <Button text={'Register'} onClick={() => handleChange(true)} width={250}/>
        <Button text={'Log In'}  width={250}/>
      </div>
    </form>
  )
}

export default UserData