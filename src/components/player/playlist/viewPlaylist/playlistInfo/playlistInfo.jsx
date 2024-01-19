import Style from './playlistInfo.module.css'
import { jwtDecode } from 'jwt-decode';
import undefIcon from '../../../../../assets/icons/player/undefinedIcon.png'

export default function PlaylistInfo ({ data }) {
    
    const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).userName;
    const music = data.getPlaylistMusic.music
    return (
      <article className={Style.playlist_info}>
        <div className={`${music.length === 1 ? Style.playlist_info_i : Style.playlist_info_img}`}>
          {music.length === 0 && <img src={undefIcon} alt='undef' className={Style.undef}/>}
          {music.map(music => (
            <img key={music.id} src={music.image} alt={music.name} className={Style.playlist_info_image}/>
          )).slice(0, 4)}
        </div>
        <div className={Style.playlist_info_title}>
          <h2>{data.getPlaylistMusic.tittle}</h2>
          <p>{data.getPlaylistMusic.description}</p>
          <span>{userId}</span>
        </div>
      </article>
    )
}