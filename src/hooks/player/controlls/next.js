import { useSelector, useDispatch } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { getPlay } from '../../state/features/music/playingSlice'
import { useLazyQuery } from '@apollo/client'
import { GET_MUSIC_URL } from '../../graphql/query/music/getUrl'

export const useNext = (music) => {
  const result = useSelector(state => state.music)
  
  const [getUrl] = useLazyQuery(GET_MUSIC_URL)
  const dispatch = useDispatch()

  async function nextSong () {
    const index = result.data.findIndex(song => song.id === music.id)
    const next = index === result.data.length - 1? 0 : index + 1
    const email = jwtDecode(window.localStorage.getItem('USER_INFO')).email;
    const musicId = result.data[next].id.split('-').join('') + '.mp3';
    const { data } = await getUrl({ variables: { getMusicUrlId: email, name: musicId } })
    dispatch(getPlay({...result.data[next], url: data.getMusicURL}))

  }

  return { nextSong }

}


export const usePrev = (music) => {
    const result = useSelector(state => state.music)
  
  const [getUrl] = useLazyQuery(GET_MUSIC_URL)
  const dispatch = useDispatch()

  async function prevSong () {
    const index = result.data.findIndex(song => song.id === music.id)
    let next = index === 0 ? result.data.length - 1 : index - 1

    const email = jwtDecode(window.localStorage.getItem('USER_INFO')).email;
    const musicId = result.data[next].id.split('-').join('') + '.mp3';
    const { data } = await getUrl({ variables: { getMusicUrlId: email, name: musicId } })
    dispatch(getPlay({...result.data[next], url: data.getMusicURL}))

  }

  return { prevSong }
}
