import axios from "axios";
import { useState } from "react";
import { Click, Finish, Error } from "../../helpers/user/modals";
import { jwtDecode } from 'jwt-decode'
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_USER_MUSIC } from '../../graphql/query/music/getMusic'
import { getMusic } from "../../state/features/music/musicSlice";

export const useUpload = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const userId = jwtDecode(localStorage.getItem('USER_INFO')).email;
    const { data, refetch } = useQuery(GET_USER_MUSIC, {
        variables: { email: userId }
      })


    async function upload(file) {
      setLoading(true)
      Click()
      try {
        const formData = new FormData();
        formData.append("files", file);
        formData.append("userId", userId);
        await axios.post("http://localhost:4000/files/upload", formData);
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