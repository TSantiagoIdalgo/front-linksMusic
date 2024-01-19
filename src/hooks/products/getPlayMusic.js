import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { useLazyQuery } from '@apollo/client';
import { GET_MUSIC_URL } from '../graphql/query/music/getUrl'
import { getPlayRequest, getPlay, getPlayFailure } from '../state/features/music/playingSlice';

export const usePlayCurrent = (music, id) => {
    const [getUrl] = useLazyQuery(GET_MUSIC_URL)
    const dispatch = useDispatch();
    
    async function getMusicUrl() {
      if (!music || !id) return;
        dispatch(getPlayRequest())
        try {
          const email = jwtDecode(window.localStorage.getItem('USER_INFO')).email;
          const musicId = id.split('-').join('') + '.mp3'
  
          const { data } = await getUrl({ variables: { getMusicUrlId: email, name: musicId } })
          dispatch(getPlay({...music, url: data.getMusicURL}))
        } catch (error) {
        dispatch(getPlayFailure(error))
      }
    }

    return {getMusicUrl}
}