import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GET_MUSIC_URL } from "../graphql/query/music/getUrl";
import { jwtDecode } from "jwt-decode";
import { Personal } from "../helpers/user/modals";
import { DELETE_MUSIC } from "../graphql/mutation/music/deleteMusic";
import { GET_USER_MUSIC } from "../graphql/query/music/getMusic";
import axios from "axios";

export function useDownload() {
    const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).email;
    const [getDownload] = useLazyQuery(GET_MUSIC_URL);

    async function getDownloadUrl(id, name) {
        const musicId = id.split('-').join('') + '.mp3'
        Personal('Downloading')
        try {
          const { data } = await getDownload({ variables: { getMusicUrlId: userId, name: musicId}})
          const response = await axios.get(data.getMusicURL, {
            responseType: 'blob', // Indica que la respuesta es un blob (archivo binario)
          });
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${name}.mp3`); // Cambia el nombre del archivo aquí
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          Personal('Downloaded!')
        } catch (error) {
           Personal(error.message)
        }
    }

    return { getDownloadUrl }
}



export const useDelete = () => {
  const userId = jwtDecode(window.localStorage.getItem('USER_INFO')).email;
  const { refetch } = useQuery(GET_USER_MUSIC, {
    variables: {
      email: userId,
    }
  })
  const [deleteMusic] = useMutation(DELETE_MUSIC);

  async function handleDelete(id) {
    try {
      Personal('Deleting')
      await deleteMusic({ variables: { deleteMusicId: userId, filename: id}})
      await refetch()
      Personal('Deleted!')
    } catch (error) {
      Personal(error.message)
    }
  }

  return { handleDelete }
}