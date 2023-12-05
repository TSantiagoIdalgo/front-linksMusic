import Style from './verify.module.css'
import Button from '../../components/button/button'
import { useNavigate } from 'react-router-dom';


import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { VERIFY_USER } from '../../util/graphQuerys/mutation/user/userVerify';
import { useState } from 'react';

export default function Verify() {
  const navigate = useNavigate()

  const [ setVerify ] = useMutation(VERIFY_USER)
  const [user, setUser] = useState({})
  const queryString = window.location.search;
  const url = new URLSearchParams(queryString)
  const token = url.get('token')
  
  useEffect(() => {
    setVerify({ variables: { token } })
    .then((data) => setUser(data.data.userVerify))
  }, [setVerify, token])

  return (
    <div className={Style.verify}>
      <div className={Style.verify_template}>
        <h1>Welcome 👋 <span>{user.userName}</span></h1>
        <p>Your email has been successfully verified, you can now access our services</p>
        <Button text="Login" onClick={() => navigate('/login')}/>
      </div>
    </div>
  )
}