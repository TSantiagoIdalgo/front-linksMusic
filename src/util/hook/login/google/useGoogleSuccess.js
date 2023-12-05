import { useEffect, useState  } from "react"
import { useNavigate } from "react-router-dom"
import { gapi } from "gapi-script"

export const useGoogleSuccess = () => {
    const clientID = '654052421207-ief4rgglhtm845m7nt1s3jn0u32qkja2.apps.googleusercontent.com'
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
      if (login) {
        navigate('/')
        window.location.reload()
      }
      return () => {
        setLogin(false)
      } 
    }, [navigate, login])
  
    useEffect(() => {
      const start = () => {
        gapi.auth2.init({
          clientId: clientID
        })
      }
  
      gapi.load('client:auth2', start)
    },[])
  
    function onSuccess(res) {
      setLogin(true)
      window.localStorage.setItem('USER_INFO', JSON.stringify(res.profileObj))
      window.localStorage.setItem('token', res.tokenId)
    }
    
    return { onSuccess, clientID }
  }