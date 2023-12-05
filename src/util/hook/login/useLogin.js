import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validates/userSchema'
import { USER_LOGIN } from '../../graphQuerys/query/userLogin/userLogin'
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


export const useLogin = () => {
  const navigate = useNavigate()
  const [remember, setRemember] = useState(false)
  const [getLogin] = useLazyQuery(USER_LOGIN)
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(loginSchema)
  })

  async function submit(fieldValues) {
    try {
      const result = await getLogin({ variables: { 
        email: fieldValues['Email Adress'],
        passwordHash: fieldValues['Password']}})
      if (!result.data) throw new Error('Email or password incorrect')
      if (remember === false) {
        window.sessionStorage.setItem('token', result.data.getUserLogin.token)
      } else {
        window.localStorage.setItem('token', result.data.getUserLogin.token)
      }
      navigate('/')
      window.location.reload()
    } catch (error) {
      setError('login', { type: 'manual', message: error.message })
    }
  }

  return { register, handleSubmit, submit, errors, remember, setRemember}
}
