import { useEffect, useState, useCallback  } from 'react'
import { useSelector } from 'react-redux'


export const useControlls = (audioRef) => {
    const {data} = useSelector(state => state.play)
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if ( data === null || audioRef?.current === null) return;
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

    const newTime = useCallback((e) => {
        if ( data === null || audioRef?.curent === null) return;
        const newTime = e.target.value;

        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    
    },[data])

    return { currentTime, progress, data, newTime }
}

export const UsetogglePlay = (audioRef) => {
    const [playing, setPlaying] = useState(false)
    const [volume, setVolume] = useState(1)
    const { data } = useSelector(state => state.play)
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

    return { togglePlay, playing, volume, volumeChange }
}