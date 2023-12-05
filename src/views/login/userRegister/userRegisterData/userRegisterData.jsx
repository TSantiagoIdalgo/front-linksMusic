import Style from './userRegisterData.module.css'
import { UseRegister } from '../../../../util/hook/register/userRegister'
import Input from "../../../../components/input/input"
import Button from '../../../../components/button/button'
import Registered from '../userRegistered/userRegistered'

const UserRegisterData = ({ handleChange }) => {
  const { registered, register, handleSubmit, submit, errors } = UseRegister()
  if (!registered) {
    return (
    <form className={Style.login_form} onSubmit={handleSubmit(submit)} autoComplete='off'>
      <Input register={register} type={'text'} name={'User Name'} error={errors} width={500}/>
      <Input register={register}  type={'text'} name={'Email Adress'} error={errors} width={500}/>
        <div className={Style.login_template_form}>
          <Input register={register} type={'password'} name={'Password'} error={errors}/>
          <Input register={register} type={'password'} name={'Confirm Password'} error={errors}/>
        </div>
        <div>
        <Button text={'Back'} onClick={() => handleChange(false)} width={240}/>
        <Button text={'Register'} width={240}/>
      </div>
    </form>
    )
  } else return <Registered/>
} 

export default UserRegisterData