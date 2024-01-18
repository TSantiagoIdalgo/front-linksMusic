import Style from './home.module.css'
import { useMusic } from '../../../hooks/products/getProducts';
import MusicCard from '../musicCard/music_Card';
import nosongImg from '../../../assets/icons/player/nosong.png'

export default function Home() {
    const { music, loading, error } = useMusic();
    

    if (loading) return <p>Loading...</p>
    if (error) return (
        <main className={Style.error}>
            <img src={nosongImg} alt="not found" />
            <h2>{error.message}</h2>
        </main>
    )

    return (
        <main className={Style.home}>
            {music.data?.map((music) => (
                <MusicCard key={music.id} music={music} />
            ))}
        </main>
    )
}