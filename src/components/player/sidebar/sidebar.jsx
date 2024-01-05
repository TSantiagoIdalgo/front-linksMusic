import ThirdButton from "../../buttons/thirdButton/thirdButton"
import homeIcon from '../../../assets/icons/player/home.png'
import libraryIcon from '../../../assets/icons/player/library.png'
import addIcon from '../../../assets/icons/player/add.png'
import newIcon from '../../../assets/icons/player/new.png'
import Style from './sidebar.module.css'

export default function SideBar () {
    return (
        <section className="sidebar">
            <div className={Style.sidebar_gruop}>
              <ThirdButton img={homeIcon} text={'Home'} type='button' navigate={'/musicplayer/home'}/>
              <ThirdButton img={libraryIcon} text={'Library'} type='button' navigate={'/musicplayer/library'}/>
              <ThirdButton img={addIcon} text={'Add song'} type='button' navigate={'/musicplayer/addsong'}/>
              <div className={Style.sidebar_middle}/>
              <ThirdButton img={newIcon} text={'New playlist'} type='button' navigate={'/musicplayer/newplaylist'}/>
            </div>
        </section>
    )
}