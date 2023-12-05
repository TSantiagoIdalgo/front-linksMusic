import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '../validates/userSchema'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../../graphQuerys/mutation/user/userCreate'

export const UseRegister = () => {
  const [ createUser ] = useMutation(CREATE_USER)
  const [registered, setRegistered] = useState(false)
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(userSchema)
  })

  async function submit (fieldValues) {
    try {
      const result = await createUser({ variables: { 
        userName: fieldValues['User Name'],
        email: fieldValues['Email Adress'],
        passwordHash: fieldValues['Password']}
      })
      if (result.data) setRegistered(true)
    } catch (error) {
      setError('Email Adress', { type: 'manual', message: error.message })
    }
  }

  return { registered, register, handleSubmit, submit, errors }
}