import { useLocation } from "react-router-dom";
import Home from "../home/home";

export default function ListComponent() {
  const location = useLocation().pathname.split('/')[2]

    return (
    <ul className="main">
      {location === 'home' ? <Home /> : null}
    </ul>
  );

}