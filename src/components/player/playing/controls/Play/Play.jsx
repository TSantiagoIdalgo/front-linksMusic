import Style from './play.module.css'

export default function PlayControlls ({ currentTime, newTime, time}) {
  
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