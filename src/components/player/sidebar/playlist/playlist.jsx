import Style from './playlist.module.css'
import playIcon from '../../../../assets/icons/player/play.png'
import { useQuery } from "@apollo/client"
import { GET_USER_PLAYLIST } from '../../../../hooks/graphql/query/music/getPlaylist'
import { jwtDecode } from "jwt-decode"
import { NavLink } from 'react-router-dom'

const Playlists = () => {
    const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).email
    const { data, loading, error } = useQuery(GET_USER_PLAYLIST, {
        variables: {
            getUserPlaylistId: userId
        }
    })
    if (loading || !data || data.length === 0 || error) return null

    return (
        <div className={Style.container}>
            {data.getUserPlaylist.map(playlist => (
              <NavLink to={`/musicplayer/${playlist.id}`} key={playlist.id} className={Style.playlist}>
                  <h2>{playlist.tittle}</h2>
                  <img src={playIcon} alt={playlist.name} />
              </NavLink>
            ))}
        </div>
    )
}

export default Playlists;