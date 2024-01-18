import Style from './playlistInfo.module.css'
import { jwtDecode } from 'jwt-decode';

export default function PlaylistInfo ({ data }) {
    
    const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).email;

    return (
      <article className={Style.playlist_info}>
        <div className={Style.playlist_info_img}>

        </div>
        <div className={Style.playlist_info_title}>
          <h2>{data.getPlaylistMusic.tittle}</h2>
          <p>{data.getPlaylistMusic.description}</p>
          <span>{userId}</span>
        </div>
      </article>
    )
}