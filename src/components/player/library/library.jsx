import Style from './library.module.css'
import { useQuery } from '@apollo/client'
import { NavLink } from 'react-router-dom'
import { GET_USER_PLAYLIST } from '../../../hooks/graphql/query/music/getPlaylist'
import { jwtDecode } from 'jwt-decode'
import undefIcon from '../../../assets/icons/player/undefinedIcon.png'

export default function Library() {
    const { data: { getUserPlaylist }, loading, error } = useQuery(GET_USER_PLAYLIST, {
        variables: {
            getUserPlaylistId: jwtDecode(window.localStorage.getItem('USER_INFO')).email,
        }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div className={Style.library}>
            <article className={Style.library_card}>
                {getUserPlaylist.map(playlist => (
                    <NavLink to={`/musicplayer/${playlist.id}`} key={playlist.id} className={Style.playlist_card}>
                        <div className={Style.playlist_card_img}>
                            <img src={undefIcon} alt="playlistIcon" />
                        </div>
                        <h2 className={Style.playlist_card_tittle}>{playlist.tittle}</h2>
                    </NavLink>
                ))}
            </article>
        </div>
    )
}