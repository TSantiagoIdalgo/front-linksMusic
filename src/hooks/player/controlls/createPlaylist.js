import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_PLAYLIST } from '../../../hooks/graphql/mutation/playlist/createPlaylist'
import { zodResolver } from '@hookform/resolvers/zod'
import { jwtDecode } from 'jwt-decode'
import { playlistSchema } from '../../validates/playlistSchema'
import { useQuery } from '@apollo/client'
import { GET_USER_PLAYLIST } from '../../graphql/query/music/getPlaylist'

export const useCreatePlaylist = () => {
    const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).email
    const [loading, setLoading] = useState(false)
    const { refetch } = useQuery(GET_USER_PLAYLIST, {
        variables: {
            getUserPlaylistId: userId
        }
    })
    const [createPlaylist] = useMutation(CREATE_PLAYLIST)
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm({
        resolver: zodResolver(playlistSchema)
    })

    async function onSubmit(data) {
        try {
            setLoading(true)
            await createPlaylist({
                variables: {
                    userId,
                    tittle: data.tittle,
                    description: data.description
                }
            })
            await refetch()
            setLoading(false)
            reset()
        } catch (error) {
            setError('tittle', {
                message: error.message,
            })
            setError('description', {
                message: error.message,
            })
            setLoading(false)
            reset()
        }
    }

    return { register, handleSubmit, onSubmit, loading, errors}
}