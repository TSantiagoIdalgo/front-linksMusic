import Style from './play.module.css'
import { useRef, useEffect, useState } from 'react';

export default function PlayControlls ({ currentTime, newTime, time }) {
  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const rangeRef = useRef(null);
  useEffect(() => {
    const range = rangeRef.current;
    const value = range.value;
    const min = range.min || 0;
    const max = range.max || 100;
    const percentage = ((value - min) / (max - min)) * 100;
    const thumbPosition = (range.offsetWidth * percentage) / 100;
    setBackgroundWidth(thumbPosition);
}, [currentTime])
    return (
      <div className={Style.time}>
          <input className={Style.time_input} type="range" value={currentTime} onChange={newTime}
          max={time}
          min={0}
          step={0.1}
          ref={rangeRef}
          />
          <div className={Style.principal_time} style={{width: `${backgroundWidth}px`}} />
        </div>
    )
  }