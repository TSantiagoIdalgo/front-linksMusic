import Style from './dropzone.module.css'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import uploadIcon from '../../../../assets/icons/player/archive.png'
import songIcon from '../../../../assets/icons/player/song.png'
import { useUpload } from '../../../../hooks/player/controlls/upload'

export default function MusicDropzone() {
    
    const onDrop = useCallback(async () => {}, []);
    const { getRootProps, getInputProps, isDragActive, acceptedFiles  } = useDropzone({onDrop})
    const { upload, loading } = useUpload()
    return (
    <div className={Style.dropzoneContainer}>
        <div className={Style.dropzone} {...getRootProps()}>
        <input {...getInputProps()}/>
            <div className={Style.dropzone_drop}>
                { isDragActive
                 ? <img src={uploadIcon} alt="archive" className={Style.dropzone_drop_i} />
                 : <img src={uploadIcon} alt="archive" className={Style.dropzone_drop_img} />}
                <p>Click or drag and drop</p>
            </div>
        </div>
        {acceptedFiles[0] 
        && <div className={Style.dropsong}>
            <img src={songIcon} alt="song" />
            <h2>{acceptedFiles[0].name}</h2>
            {loading
            ? <button className={Style.dropsong_button_disabled} disabled>Upload</button>
            : <button className={Style.dropsong_button} onClick={() => upload(acceptedFiles[0])}>Upload</button>}
          </div>}
    </div>
  )

}