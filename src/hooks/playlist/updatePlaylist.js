import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { GET_PLAYLIST_MUSIC } from '../graphql/query/music/getPlaylistMusic';
import { UPDATE_PLAYLIST } from '../graphql/mutation/playlist/updatePlaylist';
import { playlistSchema } from '../validates/playlistSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Personal, Error } from '../helpers/user/modals';

export const useUpdatePlaylist = (id, handleEdit) => {
  const [updatePlaylist] = useMutation(UPDATE_PLAYLIST, {
    refetchQueries: [{ query: GET_PLAYLIST_MUSIC, variables: { getPlaylistMusicId: id } }]
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(playlistSchema)
    });


  async function editPlaylist (form) {
    Personal('Editing...')
    try {
      await updatePlaylist({
        variables: {
          updatePlaylistId: id,
          tittle: form.tittle,
          description: form.description
        }
      })
      handleEdit(false)
      Personal('Edited!')
    } catch (error) {
        Error(error.message)
        handleEdit(false)
      }
  }

  
  return { register, handleSubmit, errors, editPlaylist }
}