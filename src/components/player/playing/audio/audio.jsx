import Style from './audio.module.css'
import volumeIcon from '../../../../assets/icons/player/volume.png'
import { useState } from 'react'

export default function Audio({ volumeChange, volume }) {
    const [visible, setVisible] = useState(false)
    return (
        <div className={Style.audio}>
            <div className={Style.audio_change} onClick={() => setVisible(!visible)}>
                <img src={volumeIcon} alt="volue" />
                <input
                 type='range' 
                 value={volume} 
                 step={0.01} 
                 in={0} 
                 max={1} 
                 onChange={volumeChange}
                 style={{visibility: `${visible ? 'visible' : 'hidden'}`}}/>
            </div>
        </div>
    )
}