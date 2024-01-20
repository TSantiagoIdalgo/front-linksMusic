import Style from './playlistInfo.module.css'
import PlaylistEdit from '../playlistEdit/playlistEdit';
import PlaylistTittle from '../playlistTittle/playlistTittle';
import undefIcon from '../../../../../assets/icons/player/undefinedIcon.png'

import { useState } from 'react';
export default function PlaylistInfo ({ data }) {
  const music = data.getPlaylistMusic.music
  
  const [edit, handleEdit] = useState(false)
  
    return (
      <article className={Style.playlist_info}>
        <MusicPreview music={music}/>
        {edit
        ? <PlaylistEdit 
            id={data.getPlaylistMusic.id} 
            handleEdit={handleEdit}
            description={data.getPlaylistMusic.description}
            tittle={data.getPlaylistMusic.tittle} />
        : <PlaylistTittle 
            tittle={data.getPlaylistMusic.tittle} 
            description={data.getPlaylistMusic.description} 
            handleEdit={() => handleEdit(true)}/>}
      </article>
    )
}

export const MusicPreview = ({ music }) => {

  return (
    <>
    {music.length === 0
      ? <div className={Style.undef_container}>
          <img src={undefIcon} alt='undef' className={Style.undef}/>
        </div>
      : <div className={`${music.length === 1 ? Style.playlist_info_i : Style.playlist_info_img}`}>
          {music.map(music => (
            <>
              {music.image !== null
              ? <img src={music.image} alt={music.name} className={Style.playlist_info_image}/>
              : <img src={undefIcon} alt='undef' className={Style.playlist_info_undef}/>}
            </>
          )).slice(0, 4)}
        </div>}
    </>
  )
}