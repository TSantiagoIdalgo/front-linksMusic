import Style from './musicPlaylist.module.css'
import { useQuery } from '@apollo/client';
import { GET_USER_PLAYLIST } from '../../../../hooks/graphql/query/music/getPlaylist';
import { jwtDecode } from 'jwt-decode';
import AddButton from '../addButton/addButton';


const AddPlaylist = ({ id, name, handlePortal, handlePlaylist }) => {
    const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).email
    const playlist = useQuery(GET_USER_PLAYLIST, {
        variables: {
            getUserPlaylistId: userId
        }
    })
    if (playlist.loading || !playlist.data || playlist.error) return null
    return (
        <div className={Style.playlist}>
            <div className={Style.container_title}>
                <button className={Style.close_portal} onClick={() => handlePlaylist(true)}>{'<'}</button>
                <h1>{name}</h1>
                <button className={Style.close_portal} onClick={() => handlePortal(false)}>X</button>
            </div>
            <div>
            {playlist.data.getUserPlaylist.map(item => (
                    <AddButton key={item.id} playlist={item} id={id}/>
                ))}
            </div>
        </div>
    )
}


export default AddPlaylist;