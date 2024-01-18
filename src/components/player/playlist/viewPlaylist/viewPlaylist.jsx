import Style from './viewPlaylist.module.css'
import PlaylistInfo from './playlistInfo/playlistInfo'
import MusicCard from '../../musicCard/music_Card'

import { GET_PLAYLIST_MUSIC } from '../../../../hooks/graphql/query/music/getPlaylistMusic'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';


export default function  ViewPlaylist() {
    const { id } = useParams()
    const { data, loading, error } = useQuery(GET_PLAYLIST_MUSIC, {
        variables: {
            getPlaylistMusicId: id
        }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <section className={Style.container}>
            <div className={Style.playlist}>
                <PlaylistInfo data={data}/>
                <article className={Style.playlist_music}>
                    {data.getPlaylistMusic.music.map(music => (
                        <MusicCard key={music.id} music={music}/>
                    ))}
                </article>
            </div>
        </section>
    )
}