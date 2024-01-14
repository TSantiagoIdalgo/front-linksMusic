import { useSelector, useDispatch } from 'react-redux'
import { Click, Finish, Error } from '../../helpers/user/modals'
import { jwtDecode } from 'jwt-decode'
import { useQuery } from '@apollo/client'
import { GET_USER_MUSIC } from '../../graphql/query/music/getMusic'
import { getMusic } from '../../state/features/music/musicSlice'
import { setUploading, cleanUploading } from '../../state/features/music/urlSlice'
import axios from 'axios'

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
            await axios.post('http://localhost:4000/files/url', datas)
            await response.refetch()
            dispatch(getMusic(response.data.getUserMusic))
            dispatch(cleanUploading())
            Finish()
        } catch (error) {
            console.log(error.message);
            Error(error.message)
            dispatch(cleanUploading())
        } 
    }

    return { data, loading, urlLoading: uploading, Upload }
}