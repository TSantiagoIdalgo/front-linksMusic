import { useLazyQuery } from "@apollo/client";
import { GOOGLE_LOGIN } from "../../graphql/query/user/userLogin";

export const useFacebook = () => { 
    const fbId = import.meta.env.VITE_FACEBOOK_ID;
    const [getGoogleLogin] = useLazyQuery(GOOGLE_LOGIN)

    async function success (data) {
        const { email, name } = data
        const result = await getGoogleLogin({ variables: { email, userName: name } })
        window.localStorage.setItem('USER_INFO', result.data.getUserNetworkLogin)
        window.location.href = 'http://localhost:5173/'
    } 

    function error (err) {
        console.log(err);
    }

    return { fbId, success, error };
}