import { useState, useEffect } from 'react'

export const useLocalUser = () => {
    const [userInfo, setUserInfo] = useState({})
    const [userToken, setUserToken] = useState('')
    const info = window.localStorage.getItem("USER_INFO")
    const token = window.localStorage.getItem("token")
    const sessionInfo = window.sessionStorage.getItem("USER_INFO")
    const sessionToken = window.sessionStorage.getItem("token")
    
    useEffect(() => {
        if (info !== null) setUserInfo(JSON.parse(info))
        else if (sessionInfo !== null) setUserInfo(JSON.parse(sessionInfo))
        else setUserInfo({})
        if (token !== null) setUserToken(JSON.stringify(token))
        else if (sessionToken !== null) setUserToken(JSON.stringify(sessionToken))
        else setUserToken('')
    }, [token, info, sessionInfo, sessionToken])

    return { userInfo, userToken }
}