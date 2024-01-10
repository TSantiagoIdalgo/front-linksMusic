import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'
import { GET_USER_MUSIC } from '../graphql/query/music/getMusic'
import { getMusicRequest, getMusic, getMusicFailure } from '../state/features/music/musicSlice'
import { jwtDecode } from 'jwt-decode'

export const useMusic = () => {
    const user = jwtDecode(window.localStorage.getItem('USER_INFO')).email;
    const { data, loading, error } = useQuery(GET_USER_MUSIC, {
      variables: { email: user }
    })

    const dispatch = useDispatch()
    useEffect(() => {
        const fetchProduct = async () => {
        dispatch(getMusicRequest())
        try {
          const products = await data?.getUserMusic
          if (products) dispatch(getMusic(products))
        } catch (error) {
          dispatch(getMusicFailure(error.message))
          }
        }
        fetchProduct()
    }, [data, dispatch])

    return { loading, error, music: useSelector((state) => state.music) }
}