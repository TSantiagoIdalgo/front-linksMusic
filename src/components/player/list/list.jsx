import { useParams, Navigate } from "react-router-dom";
import Home from "../home/home";

export default function ListComponent() {
  const { id } = useParams();
  const locationRender = () => {
    switch (id) {
      case 'home':
        return <Home/>;
      default:
        return <Navigate to="/musicplayer/home"/>;
    }
  }
    return (
    <ul className="main">
      {locationRender()}
    </ul>
  );

}