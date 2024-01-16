import Style from './home.module.css'
import { useMusic } from '../../../hooks/products/getProducts';
import MusicCard from '../musicCard/music_Card';

export default function Home() {
    const { music, loading, error } = useMusic();

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return (
        <main className={Style.home}>
            {music.data?.map((music) => (
                <MusicCard key={music.id} music={music} />
            ))}
        </main>
    )
}