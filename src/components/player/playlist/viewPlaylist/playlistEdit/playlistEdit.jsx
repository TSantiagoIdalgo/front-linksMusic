import { useUpdatePlaylist } from '../../../../../hooks/playlist/updatePlaylist'
import { jwtDecode } from 'jwt-decode'
import { useDeletePlaylist } from '../../../../../hooks/playlist/deletePlaylist'
import { useState } from 'react'
import Style from './playlistEdit.module.css'
import editIcon from '../../../../../assets/icons/playlist/edit.png'
import trashIcon from '../../../../../assets/icons/player/trash.png'
import ReactDOM  from 'react-dom'
import PlaylistDelete from '../playlistDelete/playlistDelete'

export default function PlaylistEdit({ id, handleEdit, tittle, description }) {
  const username = jwtDecode(window.localStorage.getItem('USER_INFO')).userName;
  const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).email;
  const { register, handleSubmit, errors, editPlaylist } = useUpdatePlaylist(id, handleEdit)
  const { handleDeletePlaylist } = useDeletePlaylist(id, userId)
  const [portal, handlePortal] = useState(false);

  return (
    <form onSubmit={handleSubmit(handleSubmit(editPlaylist))} className={Style.playlist_info_edit}>
      <input type='text' {...register('tittle')} defaultValue={tittle}/>
      <span>{errors?.tittle?.message}</span>
      <textarea type='text' {...register('description')} defaultValue={description}/>
      <span>{errors?.description?.message}</span>
      <button type='submit' className={Style.playlist_edit_button}>Edit</button>
      <img src={editIcon} alt='edit' className={Style.playlist_edit} onClick={() => handleEdit(false)}/>
      <img src={trashIcon} alt='trash' className={Style.playlist_delete} onClick={() => handlePortal(true)}/>
      <span className={Style.playlist_userId}>{username}</span>
      {portal && 
        ReactDOM.createPortal(<PlaylistDelete 
          handlePortal={() => handlePortal(false)} 
          handleDelete={handleDeletePlaylist}/>, 
        document.querySelector('#portal'))}
    </form>
    )
}