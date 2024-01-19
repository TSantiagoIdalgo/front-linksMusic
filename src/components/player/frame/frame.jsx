import Style from './frame.module.css'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useUploadByVideo } from '../../../hooks/player/controlls/useUploadURL'

export default function Frame() {
    const { data, loading, error } = useSelector(state => state.frame)
    const { Upload, urlLoading } = useUploadByVideo()
    if (loading) return <h1>Loading...</h1>
    if (error || !data) return <Navigate to="/musicplayer/home" />
    
    return (
        <section className={Style.frame}>
            <article className={Style.frame_container}>
              <iframe
              src={`https://www.youtube.com/embed/${data.videoId}`}
              className={Style.frame_iframe}/>
              <div className={Style.frame_data}>
                <h2>{data.videoTitle}</h2>
                <p>{data.videoDescription}</p>
                <div className={Style.videoData_buttons}>
                    <button>Download</button>
                    {urlLoading 
                      ? <button disabled>Uploading</button> 
                      : <button type='button'
                        onClick={() => Upload(`https://www.youtube.com/watch?v=${data.videoId}`)}>Upload</button> }
                </div>
              </div>
            </article>
        </section>
    )
}