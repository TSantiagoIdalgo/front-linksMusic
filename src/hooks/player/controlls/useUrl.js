import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { getUrl, getUrlRequest, cleanUrl } from '../../state/features/music/urlSlice';
import { useDispatch } from 'react-redux';
import { urlSchema } from '../../validates/urlSchema'
import axios from 'axios';

export const useUrl = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm({
        resolver: zodResolver(urlSchema)
    })

    async function onSubmit(formState) {
        dispatch(getUrlRequest())
        try {
          const apiKey = 'AIzaSyD0HbIzjRf6SLGPv0qM_36T-lpDtbdxumk'
          const videoId = formState.url.split('v=')[1] ?? formState.url.split('/')[3].split('?')[0]
          const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`

          const { data } = await axios.get(url)
          if (!data.items[0]) throw new Error('Video not found')

          const response = data.items[0].snippet
          
          dispatch(getUrl({
            title: response.title,
            image: response.thumbnails.maxres?.url ?? response.thumbnails.standard.url,
            channel: response.channelTitle,
            url: videoId
          }))
        } catch (error) {
            setError('url', { message: error.message})
        }
    }

    const clean = () => {
      dispatch(cleanUrl())
      reset()
    }

    return { register, handleSubmit, onSubmit, errors, clean }
}