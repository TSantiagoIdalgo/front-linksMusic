import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { usePlayCurrent } from '../products/getPlayMusic';
import axios from 'axios';

export const useSearch = () => {
    const { data } = useSelector(state => state.music)
    const [search, setSearch] = useState('')
    const [items, setItems] = useState([])
    const [userItem, setUserItem] = useState([])
    const [music, setMusic] = useState({})
    const { getMusicUrl } = usePlayCurrent(music, music.id)

  async function handleSearch(event) {
    setItems([])
    try {
      if (event.key === 'Enter') {
        const apiKey = 'AIzaSyBAhFLO8-6FfwA3ow0FuVWtdsWVggBmZec'

        
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
          part: 'snippet',
          type: 'video',
          q: search,
          key: apiKey,
          maxResults: 3
          },
        })
        const filteredItems = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).slice(0, 3)
        response.data?.items?.map(item => {
          const videoId = item.id.videoId;
          const videoTitle = item.snippet.title;
          const videoThumbnail = item.snippet.thumbnails.default.url;
          const videoDescription = item.snippet.description;
          setItems(prevItems => [...prevItems, { videoId, videoTitle, videoThumbnail, videoDescription }])
        })
        setUserItem(filteredItems)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    function handleSelect() {
      setMusic(music)
      getMusicUrl()
      setItems([])
    }
    handleSelect()
  }, [music])

  return { handleSearch, search, setSearch, items, userItem, setMusic, setItems }
}