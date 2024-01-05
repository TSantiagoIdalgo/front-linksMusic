import Style from './playing.module.css'
import { useSelector } from 'react-redux'
import PlayData from './playData/playData'
import Audio from './audio/audio'

import { useEffect, useState, useRef, useCallback  } from 'react'

import Controls from './controls/controls'

export default function Playing() {
    const {data} = useSelector(state => state.play)
    const [playing, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [volume, setVolume] = useState(1)
    const audioRef = useRef(null)

    
    
    useEffect(() => {
        if ( data === null) return;
        const audio = audioRef.current;
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleProgress = () => setProgress(audio.duration);

        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("durationchange", handleProgress);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("durationchange", handleProgress);
        }
    },[data])

    const togglePlay = useCallback(() => {
        if ( data === null) return;
        const audio = audioRef.current;

        if (audio.paused) {
            audio.play();
            setPlaying(true);
        } else {
            audio.pause();
            setPlaying(false);
        }
    }, [data])

    const volumeChange = useCallback((e) => {
        if ( data === null) return;
        const newVolume = e.target.value;

        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    }, [data])

    const newTime = useCallback((e) => {
        if ( data === null) return;
        const newTime = e.target.value;

        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    
    },[data])

    if (data === null) return <></>
    if (data.data === null) return <></>

    return (
        <div className={Style.container}>
            <audio ref={audioRef} src={data.url} autoPlay/>
            <PlayData image={data.image} name={data.name}/>
            <Controls 
              time={data.duration} 
              currentTime={currentTime} 
              playing={playing} 
              togglePlay={togglePlay}
              newTime={newTime}
              progress={progress}
              />
              <Audio
              volumeChange={volumeChange}
              volume={volume}/>
        </div>
    )

}
