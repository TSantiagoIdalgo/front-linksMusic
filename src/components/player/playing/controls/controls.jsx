import Style from './controls.module.css'
import playIcon from '../../../../assets/icons/player/play.png'
import pauseIcon from '../../../../assets/icons/player/pause.png'
import prevIcon from '../../../../assets/icons/player/prev.png'
import nextIcon from '../../../../assets/icons/player/next.png'
import repeatIcon from '../../../../assets/icons/player/repeat.png'
import randomIcon from '../../../../assets/icons/player/random.png'

export default function Controls (props) {
  const { time, currentTime, playing, togglePlay, newTime } = props
  return (
    <div className={Style.controls}>
      <div className={Style.buttons}>
        <img src={randomIcon} alt="random" className={Style.button_random} />
        <img src={prevIcon} alt='prev' className={Style.button_prev}/>
        <button onClick={() => togglePlay()} className={Style.button_play}>
          {playing 
          ? <img src={pauseIcon} alt="pause" />
          : <img src={playIcon} alt="play" />}
        </button>
        <img src={nextIcon} alt='next' className={Style.button_next}/>
        <img src={repeatIcon} alt='repeat' className={Style.button_repeat}/>
      </div>
      <PlayControlls currentTime={currentTime} newTime={newTime} time={time}/>
    </div>

  )
}

const PlayControlls = ({ currentTime, newTime, time}) => {
  function secondsToMinutes(seg) {
    let segundos = parseInt(seg)
    let minutes = Math.floor(segundos / 60);
    let seconds = segundos % 60;
    return `${minutes}:${seconds}`;
  }
  return (
    <div className={Style.time}>
        <span>{secondsToMinutes(currentTime)}</span>
        <input type="range" value={currentTime} onChange={newTime}
        max={time}
        min={0}
        step={0.1}
        />
        <span>{secondsToMinutes(time)}</span>
      </div>
  )
}