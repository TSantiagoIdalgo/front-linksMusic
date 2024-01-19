import Style from './playlistDelete.module.css'

export default function PlaylistDelete({ handleDelete, handlePortal }) {
    return (
        <figure className={Style.portal}>
            <div className={Style.container}>
            <p>Are you sure you want to delete this playlist?</p>
              <div className={Style.container_buttons}>
                <button onClick={handlePortal}>Cancel</button>
                <button onClick={handleDelete}>Delete Playlist</button>
              </div>
            </div>
        </figure>
    )
}