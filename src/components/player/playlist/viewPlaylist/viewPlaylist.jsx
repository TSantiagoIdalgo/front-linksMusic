import Style from './viewPlaylist.module.css'
import PlaylistInfo from './playlistInfo/playlistInfo'

export default function  ViewPlaylist() {

    return (
        <section className={Style.container}>
            <div className={Style.playlist}>
                <PlaylistInfo/>
                <article>

                </article>
            </div>
        </section>
    )
}