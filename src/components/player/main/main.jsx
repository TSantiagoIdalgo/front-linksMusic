import NavPlayer from "../nav/nav"
import SideBar from "../sidebar/sidebar"
import ListComponent from "../list/list"
import Playing from "../playing/playing"
import "./main.css"

export default function PlayerMain () {
    return (
        <div className="container">
            <NavPlayer/>
            <SideBar/>
            <ListComponent/>
            <Playing/>
        </div>
    )
}