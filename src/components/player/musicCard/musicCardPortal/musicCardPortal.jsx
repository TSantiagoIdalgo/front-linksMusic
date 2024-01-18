import Style from './musicCardPortal.module.css'
import downloadIcon from '../../../../assets/icons/player/archive.png'
import addIcon from '../../../../assets/icons/player/add.png'
import trashIcon from '../../../../assets/icons/player/trash.png'
import AddPlaylist from '../musicPlaylist/musicPlaylist'
import { useDownload, useDelete } from '../../../../hooks/portal/portal'
import { useState } from 'react'

export default function MusicCardPortal({ id, name, handlePortal }) {
    const [playlist, handlePlaylist] = useState(true)
    const { getDownloadUrl } = useDownload()
    const { handleDelete } = useDelete()

    return (
        <div className={Style.music_portal}>
            {playlist
            ? <div className={Style.container}>
                <div className={Style.container_title}>
                  <h1>{name}</h1>
                  <button onClick={() => handlePortal(false)} className={Style.close_portal}>X</button>
                </div>
                <PortalButton tittle={'Add playlist'} onClick={() => handlePlaylist(!playlist)} img={addIcon}/>
                <PortalButton tittle='Download' onClick={() => getDownloadUrl(id, name)} img={downloadIcon}/>
                <PortalButton tittle='Delete' onClick={() => handleDelete(id)} img={trashIcon}/>
              </div>
            : <AddPlaylist id={id} name={name} handlePortal={handlePortal} handlePlaylist={handlePlaylist}/>}
        </div>
    )
}


const PortalButton = ({ tittle, onClick, img }) => {
    return (
        <div className={Style.button}>
            <img src={img} alt={tittle} />
            <button onClick={onClick}>{tittle}</button>
        </div>
    )
}