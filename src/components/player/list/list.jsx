import { useParams, Navigate } from "react-router-dom";
import Home from "../home/home";
import AddSong from "../addSong/addSong";
import Playlist from "../playlist/playlist";
import ViewPlaylist from "../playlist/viewPlaylist/viewPlaylist";
import Frame from "../frame/frame";
import { validate } from 'uuid';

export default function ListComponent() {
  const { id } = useParams();

  const locationRender = () => {
    if (id === 'home') return <Home/>;
    else if (id === 'addsong') return <AddSong/>;
    else if (id === 'newplaylist') return <Playlist/>;
    else if (validate(id)) return <ViewPlaylist/>;
    else if (id === 'frame') return <Frame/>
    else return <Navigate to="/musicplayer/home"/>;
  }

  return (
    <div className="main">
      {locationRender()}
    </div>
  );

}