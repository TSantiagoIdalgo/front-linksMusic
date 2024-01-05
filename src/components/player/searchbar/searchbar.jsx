import Style from './searchbar.module.css'
import searchIcon from '../../../assets/icons/search.png'

export default function SearchBar() {
    return (
    <div className={Style.searchbar}>
      <img src={searchIcon} alt="search icon" />
      <input type="text" placeholder="Search for a song" />
    </div>
  );
}