import Style from './addButton.module.css'
import checkIcon from '../../../../assets/icons/playlist/check.png'
import { useAddRemove } from '../../../../hooks/playlist/addRemove'
import notCheck from '../../../../assets/icons/playlist/notcheck.png'

const AddButton = ({ playlist, id }) => {
    const { add, remove, data, loading, error } = useAddRemove(playlist, id)

    if (loading || !data || error) return null

    return (
        <div className={Style.addPlaylist}>
            {data.getPlaylistMusic.music.some(e => e.id === id)
            ? <div className={Style.check} onClick={() => remove()}>
                <img src={checkIcon} alt="check" />  
                <button>{data.getPlaylistMusic.tittle}</button>
              </div>
            : <div className={Style.notcheck} onClick={() => add()}>
                <img src={notCheck} alt="notcheck" /> 
                <button>{data.getPlaylistMusic.tittle}</button>
              </div>}
        </div>
    )
}


export default AddButton;