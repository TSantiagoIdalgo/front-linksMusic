import Style from './audio.module.css'
import volumeIcon from '../../../../assets/icons/player/volume.png'
import { useState, useEffect, useRef } from 'react'

export default function Audio({ volumeChange, volume }) {
    const [visible, setVisible] = useState(false)
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
  }, [volume])
    return (
        <div className={Style.audio} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <div className={Style.audio_change}>
                <img src={volumeIcon} alt="volue" />
                <input
                 ref={rangeRef}
                 type='range' 
                 value={volume} 
                 step={0.01} 
                 in={0} 
                 max={1} 
                 onChange={volumeChange}
                 style={{visibility: `${visible ? 'visible' : 'hidden'}`}}/>
                 <div className={Style.audio_range} style={{width: `${backgroundWidth}px`, visibility: `${visible ? 'visible' : 'hidden'}`}}/>
            </div>
        </div>
    )
}