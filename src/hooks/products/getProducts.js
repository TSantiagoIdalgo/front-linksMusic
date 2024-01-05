import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'
import { GET_ALL_MUSIC } from '../graphql/query/music/getMusic'
import { getMusicRequest, getMusic, getMusicFailure } from '../state/features/music/musicSlice'

export const useMusic = () => {
    const { data, loading, error } = useQuery(GET_ALL_MUSIC)

    const dispatch = useDispatch()
    useEffect(() => {
        const fetchProduct = async () => {
        dispatch(getMusicRequest())
        try {
          const products = await data?.getAllMusic
          if (products) dispatch(getMusic(products))
        } catch (error) {
          dispatch(getMusicFailure(error.message))
          }
        }
        fetchProduct()
    }, [data, dispatch])

    return { loading, error, music: useSelector((state) => state.music) }
}