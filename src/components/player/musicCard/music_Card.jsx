import Style from './music_Card.module.css'
import { useState } from 'react'
import ReactDOM  from 'react-dom'
import MusicCardPortal from './musicCardPortal/musicCardPortal';
import { usePlayCurrent } from '../../../hooks/products/getPlayMusic';
import { useWindowSize } from '../../../hooks/window/useWindow';
import undefinedIcon from '../../../assets/icons/player/undefinedIcon.png'

export default function MusicCard(music) {
  const { id, name, album, duration, image } = music.music;
  const width = useWindowSize();
  const [portal, handlePortal] = useState(false);
  const { getMusicUrl } = usePlayCurrent(music.music, id);

    function secondsToMinutes(seg) {
      let segundos = parseInt(seg)
      let minutes = Math.floor(segundos / 60);
      let seconds = segundos % 60;
      return `${minutes}:${seconds}`;
    }
  return (
    <div className={Style.container}>
    <figure className={Style.cardMusic} onClick={getMusicUrl}>
      <div className={Style.card_tittle}>
        {image 
        ? <img src={image} alt={name} /> 
        : <div className={Style.undef}>
           <img src={undefinedIcon} alt={name}/>
          </div>}
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
    <button onClick={() => handlePortal(true)} className={Style.cardMusic_prop}>...</button>
    {portal && 
      ReactDOM.createPortal(<MusicCardPortal id={id} name={name} handlePortal={handlePortal}/>, 
      document.querySelector('#portal'))}
    </div>
    )
}