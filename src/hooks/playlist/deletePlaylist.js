import { useMutation } from "@apollo/client"
import { DELETE_PLAYLIST } from '../graphql/mutation/playlist/deletePlaylist';
import { GET_USER_PLAYLIST } from "../graphql/query/music/getPlaylist";
import { Personal, Error } from "../helpers/user/modals";
import { useNavigate } from "react-router-dom";

export const useDeletePlaylist = (id, userId) => {
const navigate = useNavigate() 
const [deletePlaylist] = useMutation(DELETE_PLAYLIST, {
  refetchQueries: [ { query: GET_USER_PLAYLIST, variables: { getUserPlaylistId: userId  }}]
})
  async function handleDeletePlaylist () {
    Personal('Deleting...')
    try {
      await deletePlaylist({ variables: { deletePlaylistId: id}})
      Personal('Deleted!')
    } 
    catch (error) {
      Error(error.message)
    }
    finally {
        navigate('/musicplayer/home')
    }
  }

  return { handleDeletePlaylist }
}