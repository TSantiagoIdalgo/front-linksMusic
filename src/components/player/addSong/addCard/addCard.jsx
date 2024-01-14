import Style from './addCard.module.css'
import { useUploadURL } from '../../../../hooks/player/controlls/useUploadURL'

export default function AddCard() {
    const { data, loading, urlLoading, Upload } = useUploadURL()
    if (loading) return <p>loading...</p>
    if (!data) return <p>No data</p>
    return (
        <div className={Style.videoData}>
          <img src={data.image} alt={data.channel} />
          <div className={Style.videoData_title}>
            <h2>{data.title}</h2>
            <h2>{data.channel}</h2>
            <div className={Style.videoData_buttons}>
                <button >Download</button>
                {urlLoading ? <button disabled>Uploading</button> : <button onClick={Upload}>Upload</button> }
            </div>
          </div>
        </div>
    )
}