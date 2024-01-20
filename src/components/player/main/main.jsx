import { TOKEN_VERIFY } from "../../../hooks/graphql/query/user/tokenVerify"
import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import NavPlayer from "../nav/nav"
import SideBar from "../sidebar/sidebar"
import ListComponent from "../list/list"
import Playing from "../playing/playing"
import "./main.css"

export default function PlayerMain () {
    const { data, loading, error } = useQuery(TOKEN_VERIFY, {
        variables: {token: window.localStorage.getItem('USER_INFO') || window.sessionStorage.getItem('USER_INFO')},
        pollInterval: 3600000,  
    })
    useEffect(() => {
        if (error) window.location.href = '/login'
        if (data) {
            if (data.userTokenVerify === false) window.location.href = '/login'
        }
        return () => {}
    },[])
    if (error) window.location.href = '/login'
    if (loading) return null
    return (
        <div className="container">
            <NavPlayer/>
            <SideBar/>
            <ListComponent/>
            <Playing/>
        </div>
    )
}