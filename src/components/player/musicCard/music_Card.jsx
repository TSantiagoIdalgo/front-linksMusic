import Style from './music_Card.module.css'
import { usePlayCurrent } from '../../../hooks/products/getPlayMusic';
import { useWindowSize } from '../../../hooks/window/useWindow';


export default function MusicCard(music) {
  const { id, name, album, duration, image } = music.music;
  const width = useWindowSize();
  const { getMusicUrl } = usePlayCurrent(music.music, id);

    function secondsToMinutes(seg) {
      let segundos = parseInt(seg)
      let minutes = Math.floor(segundos / 60);
      let seconds = segundos % 60;
      return `${minutes}:${seconds}`;
    }

  return (
    <figure className={Style.cardMusic} onClick={getMusicUrl}>
      <div className={Style.card_tittle}>
        <img src={image} alt={name} />
        { width >= 1024 
        ? <h2>{name}</h2>
        : <div className={Style.cardMusic_responsive}>
            <h2>{name}</h2>
            <h3>{album}</h3>
          </div>}
      </div>
        {width >= 1024 && <h3>{album}</h3>}
        <h3>{secondsToMinutes(duration)}</h3>
    </figure>
    )
}