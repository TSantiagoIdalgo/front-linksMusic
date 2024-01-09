import { useEffect, useState, useCallback  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlay } from '../../state/features/music/playingSlice'


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
    const dispatch = useDispatch()  
    const { playing } = useSelector(state => state.play)
    const [volume, setVolume] = useState(1)
    const { data } = useSelector(state => state.play)
    const togglePlay = useCallback(() => {
        if ( data === null) return;
        const audio = audioRef.current;

        if (audio.paused) {
            audio.play();
            dispatch(setPlay(true))
        } else {
            audio.pause();
            dispatch(setPlay(false))
        }
    }, [data, audioRef.current])

    const volumeChange = useCallback((e) => {
        if ( data === null) return;
        const newVolume = e.target.value;

        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    }, [data])

    return { togglePlay, playing, volume, volumeChange }
}