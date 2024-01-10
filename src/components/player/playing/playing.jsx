import Style from './playing.module.css'
import PlayData from './playData/playData'
import Audio from './audio/audio'
import { UsetogglePlay, useControlls } from '../../../hooks/player/controlls/useControlls'
import { useNext } from '../../../hooks/player/controlls/next'
import { useRef  } from 'react'

import Controls from './controls/controls'

export default function Playing() {
    const audioRef = useRef(null)
    const { currentTime, progress, data, newTime } = useControlls(audioRef)
    const { togglePlay, playing, volume, volumeChange } = UsetogglePlay(audioRef)
    const { nextSong } = useNext(data)
    if (data === null || data === undefined) return <></>
    
    return (
        <div className={Style.container}>
            <audio ref={audioRef} src={data.url} autoPlay onEnded={nextSong}/>
            <PlayData image={data.image} name={data.name}/>
            <Controls 
              time={data.duration} 
              currentTime={currentTime} 
              playing={playing} 
              togglePlay={togglePlay}
              newTime={newTime}
              progress={progress}
              music={data}
              />
              <Audio
              volumeChange={volumeChange}
              volume={volume}/>
        </div>
    )

}
