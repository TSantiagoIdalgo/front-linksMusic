import Style from './addSong.module.css'
import AddUrl from './addUrl/addUrl'
import AddCard from './addCard/addCard'

export default function AddSong() {
    return (
        <div className={Style.addSong}>
            <AddUrl/>
            <AddCard/>
        </div>
    )
}