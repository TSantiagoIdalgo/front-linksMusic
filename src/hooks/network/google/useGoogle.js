import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GOOGLE_LOGIN } from "../../graphql/query/user/userLogin";


export const useGoogle = () => {
    const [getGoogleLogin] = useLazyQuery(GOOGLE_LOGIN)
    const clientId = '654052421207-ief4rgglhtm845m7nt1s3jn0u32qkja2.apps.googleusercontent.com'
    
    useEffect(() => {
        const start = () => {
            gapi.auth2.init({ 
                clientId: clientId,
            })
        }

        gapi.load('client:auth2', start)
    },[])

    async function signIn(data) {
        const { email, name, imageUrl } = data.profileObj

        const result = await getGoogleLogin({ variables: { email, userName: name } })

        window.localStorage.setItem('user', imageUrl)
        window.localStorage.setItem('USER_INFO', result.data.getUserNetworkLogin)
        window.location.href = 'http://localhost:5173/'
    }

    function signFailure(data) {
        console.log(data);
    }

    return { clientId, signIn, signFailure }
}