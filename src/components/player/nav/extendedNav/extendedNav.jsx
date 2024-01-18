import Style from './extendedNav.module.css'
import homeIcon from '../../../../assets/icons/player/home.png'
import libraryIcon from '../../../../assets/icons/player/library.png'
import addIcon from '../../../../assets/icons/player/add.png'
import newIcon from '../../../../assets/icons/player/new.png'
import { useNavigate, useLocation } from 'react-router-dom'
import Playlists from '../../sidebar/playlist/playlist'

export default function ExtendedNav({ handleExtend }) {

    return (
        <div className={Style.extended}  onMouseLeave={() => handleExtend(false)}>
            <button className={Style.extendedButton} onClick={() => handleExtend(false)}>X</button>
            <div className={Style.sidebar_gruop}>
              <ExtendButton img={homeIcon} text={'Home'} type='button' navigate={'/musicplayer/home'}/>
              <ExtendButton img={libraryIcon} text={'Library'} type='button' navigate={'/musicplayer/library'}/>
              <ExtendButton img={addIcon} text={'Add song'} type='button' navigate={'/musicplayer/addsong'}/>
              <div className={Style.sidebar_middle}/>
              <ExtendButton img={newIcon} text={'New playlist'} type='button' navigate={'/musicplayer/newplaylist'}/>
              <Playlists/>
            </div>
        </div>
    )
}


function ExtendButton({ text, type, navigate, style, img }) {
    const navigateClick = useNavigate()
    const location = useLocation().pathname
    
    return <div className={Style.button_container}>
        { img && <img src={img} alt="" className={Style.img} /> }
        <button 
          className={`${location.includes(navigate)
            ? Style.button_active
            : Style.button}`} 
          onClick={() => navigateClick(navigate)} 
          type={type}
          style={style}>{text}</button>
    </div>
}