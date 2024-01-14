import { useParams, Navigate } from "react-router-dom";
import Home from "../home/home";
import AddSong from "../addSong/addSong";

export default function ListComponent() {
  const { id } = useParams();
  const locationRender = () => {
    switch (id) {
      case 'home':
        return <Home/>;
      case 'addsong': 
        return <AddSong/>;
      default:
        return <Navigate to="/musicplayer/home"/>;
    }
  }
    return (
    <div className="main">
      {locationRender()}
    </div>
  );

}