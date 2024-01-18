import Style from './playlistInfo.module.css'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_PLAYLIST_BY_ID } from '../../../../../hooks/graphql/query/music/getplaylistById';
import { jwtDecode } from 'jwt-decode';

export default function PlaylistInfo () {
    const { id } = useParams()
    const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).email;
    const { data, loading, error } = useQuery(GET_PLAYLIST_BY_ID, {
        variables: {
            getPlaylistByIdId: id
        }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
      <article className={Style.playlist_info}>
        <div className={Style.playlist_info_img}>

        </div>
        <div className={Style.playlist_info_title}>
          <h2>{data.getPlaylistById.tittle}</h2>
          <p>{data.getPlaylistById.description}</p>
          <span>{userId}</span>
        </div>
      </article>
    )
}