import { useSelector, useDispatch } from 'react-redux'
import { Click, Finish, Error } from '../../helpers/user/modals'
import { jwtDecode } from 'jwt-decode'
import { useQuery } from '@apollo/client'
import { GET_USER_MUSIC } from '../../graphql/query/music/getMusic'
import { setUploading, cleanUploading } from '../../state/features/music/urlSlice'
import axios from 'axios'
import { useState } from 'react'

export const useUploadURL = () => {
    const dispatch = useDispatch()
    const token = window.localStorage.getItem('USER_INFO')
    const userId = jwtDecode(token).email
    const { data, loading, uploading } = useSelector(state => state.url)
    const response = useQuery(GET_USER_MUSIC, {
        variables: { email: userId }
      })
    async function Upload () {
        Click()
        dispatch(setUploading())
        try {
            const datas = {
                id: data.url,
                userId: userId
            }
            await axios.post('https://dcv88hhl-4000.brs.devtunnels.ms/files/url', datas)
            await response.refetch()
            dispatch(cleanUploading())
            Finish()
        } catch (error) {
            Error(error.message)
            dispatch(cleanUploading())
        } 
    }

    return { data, loading, urlLoading: uploading, Upload }
}

export const useUploadByVideo = () => {
    const [urlLoading, setUrlLoading] = useState(false)
    const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).email
    const dispatch = useDispatch()
    const response = useQuery(GET_USER_MUSIC, {
        variables: { email: userId }
      })
    async function Upload (url) {
        Click()
        setUrlLoading(true)
        dispatch(setUploading())
        try {
            const datas = {
                id: url.split('v=')[1],
                userId: userId
            }
            await axios.post('https://dcv88hhl-4000.brs.devtunnels.ms/files/url', datas)
            await response.refetch()
            dispatch(cleanUploading())
            Finish()
            setUrlLoading(false)
        } catch (error) {
            Error(error.message)
            dispatch(cleanUploading())
            setUrlLoading(false)
        } 
    }

    return { Upload, urlLoading }
}