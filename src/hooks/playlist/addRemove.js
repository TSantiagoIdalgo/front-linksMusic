import { useMutation, useQuery } from '@apollo/client';
import { GET_PLAYLIST_MUSIC } from '../graphql/query/music/getPlaylistMusic';
import { ADD_MUSIC_TO_PLAYLIST } from '../graphql/mutation/playlist/addMusicToPlaylist';
import { Personal } from '../helpers/user/modals';
import { REMOVE_MUSIC_FROM_PLAYLIST } from '../graphql/mutation/playlist/removeMusic';


export const useAddRemove = (playlist, id) => {
    const [addToPlaylist] = useMutation(ADD_MUSIC_TO_PLAYLIST)
    const [removeFromPlaylist] = useMutation(REMOVE_MUSIC_FROM_PLAYLIST)
    const { data, loading, error, refetch } = useQuery(GET_PLAYLIST_MUSIC, {
        variables: {
            getPlaylistMusicId: playlist.id
        }
    })

    async function add () {
        Personal('Adding')
        try {
            await addToPlaylist({
                variables: {
                    musicId: id,
                    playlistId: playlist.id
                }
            })
            await refetch()
            Personal('Added')
        } catch (error) {
            Personal(error.message)
        }
    }

    async function remove () {
        Personal('Removing')
        try {
            await removeFromPlaylist({
                variables: {
                    musicId: id,
                    playlistId: playlist.id
                }
            })
            await refetch()
            Personal('Removed')
        } catch (error) {
            Personal(error.message)
        }

    }

  return { add, remove, data, loading, error }
}