import { useMutation, useQuery } from "@apollo/client"
import { DELETE_PLAYLIST } from '../graphql/mutation/playlist/deletePlaylist';
import { GET_USER_PLAYLIST } from "../graphql/query/music/getPlaylist";
import { Personal, Error } from "../helpers/user/modals";

export const useDeletePlaylist = (id, userId) => {
const getUserPlaylist = useQuery(GET_USER_PLAYLIST, {
        variables: { getUserPlaylistId: userId }
    })
const [deletePlaylist] = useMutation(DELETE_PLAYLIST)
  async function handleDeletePlaylist () {
    Personal('Deleting...')
    try {
      await deletePlaylist({ variables: { deletePlaylistId: id}})
      await getUserPlaylist.refetch()
      Personal('Deleted!')
    } 
    catch (error) {
      Error(error.message)
    }
    finally {
        window.location.href = '/musicplayer/home'
    }
  }

  return { handleDeletePlaylist }
}