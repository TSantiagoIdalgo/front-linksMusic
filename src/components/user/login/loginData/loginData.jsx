import Style from './loginData.module.css'
import Input from '../../../input/input'
import { useFormHook } from '../../../../hooks/network/login/useLogin'
import PrimaryButton from '../../../buttons/primaryButton/primaryButton'
import { NavLink, useNavigate } from 'react-router-dom'

export default function LoginData() {
    const { register, handleSubmit, onSubmit, errors, setRemind, remind } = useFormHook()
    const navigate = useNavigate()

    return (
        <form className={Style.login_form} onSubmit={handleSubmit(onSubmit)}>
            <Input info={register('email')} error={errors.email?.message} name={'Email adress'} type={'email'}/>
            <Input info={register('password')} error={errors.password?.message} name={'Password'} type={'password'}/>
            <RemindButton setRemind={setRemind} remind={remind}/>
            <div className={Style.login_form_buttons}>
                <PrimaryButton type='button' text='Register' onClick={() => navigate('/register?registered=false')}/>
                <PrimaryButton type='submit' text='Login'/>
            </div>
        </form>
    )
}

const RemindButton = ({ setRemind, remind}) => {
    return (
      <div className={Style.login_remind_buttons}>
        <div className={`${remind ? Style.login_remind_active : Style.login_remind_button}`}>
          <button type='button' onClick={() => setRemind(!remind)}>
            <i/>
          </button>
          <span>Remind me</span>
        </div>
        <NavLink to={'/'} className={Style.login_forgot}>Forgot password?</NavLink>
      </div>
    )
  }