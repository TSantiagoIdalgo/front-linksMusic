import axios from "axios";
import { useState } from "react";
import { Click, Finish, Error } from "../../helpers/user/modals";
import { jwtDecode } from 'jwt-decode'
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_USER_MUSIC } from '../../graphql/query/music/getMusic'
import { getMusic } from "../../state/features/music/musicSlice";
import { fileType } from '../../helpers/musicType'

export const useUpload = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const userId = jwtDecode(localStorage.getItem('USER_INFO')).email;
    const { data, refetch } = useQuery(GET_USER_MUSIC, {
        variables: { email: userId }
      })


    async function upload(file) {

      try {
        if (fileType(file)) return Error('File type is not supported')
        setLoading(true)
        Click()
        const formData = new FormData();
        formData.append("files", file);
        formData.append("userId", userId);
        await axios.post("https://dcv88hhl-4000.brs.devtunnels.ms/files/upload", formData);
        await refetch()
        dispatch(getMusic(data.getUserMusic))
        setLoading(false)
        Finish()
      } catch (error) {
        Error(error.message)
        setLoading(false)
      }
    }

    return { upload, loading }
}