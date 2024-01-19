import Style from './playlistTittle.module.css'
import editIcon from '../../../../../assets/icons/playlist/edit.png'
import { jwtDecode } from 'jwt-decode';

export default function PlaylistTittle({ tittle, description, handleEdit }) {
  const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).userName;
  return (
    <div className={Style.playlist_info_title}>
      <h2>{tittle}</h2>
      <p>{description}</p>
      <img src={editIcon} alt='edit' className={Style.playlist_edit} onClick={() => handleEdit(true)}/>
      <span>{userId}</span>
    </div>
    )
}