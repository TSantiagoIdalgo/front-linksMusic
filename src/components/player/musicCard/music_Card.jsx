import Style from './music_Card.module.css'
import { usePlayCurrent } from '../../../hooks/products/getPlayMusic';


export default function MusicCard(music) {
  const { id, name, album, duration, image } = music.music;
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
        <h2>{name}</h2>
        </div>
        <h3>{album}</h3>
        <h3>{secondsToMinutes(duration)}</h3>
    </figure>
    )
}