import Style from './searchbar.module.css'
import searchIcon from '../../../assets/icons/search.png'
import { useSearch } from '../../../hooks/search/search';
import { useFrame } from '../../../hooks/search/getSearch';
import undefIcon from '../../../assets/icons/player/undefinedIcon.png'

export default function SearchBar() {
  const { handleSearch, search, setSearch, items, userItem, setMusic, setItems } = useSearch()
  const { requestFrame } = useFrame()

    return (
    <div className={Style.searchbar} onKeyDown={handleSearch}>
      <img src={searchIcon} alt="search icon" className={Style.searchIcon}/>
      <input type="text" placeholder="Search for a song" onChange={(e) => setSearch(e.target.value)} value={search}/>
      <button className={Style.search_clean} onClick={() => {setItems([]); setSearch('')}} type='button'>X</button>
      {items.length > 0 
      && <div className={Style.searchItems}>
          <h2>Youtube videos</h2>
          {items.map((item) => (
            <div key={item.videoId} className={Style.searchItem} onClick={() => {requestFrame(item); setItems([])}}>
              <img src={item.videoThumbnail} alt={item.videoId} />
              <h2>{item.videoTitle}</h2>
            </div>
        ))}
          <h2>My songs</h2>
          {userItem.map((item) => (
            <div key={item.id} className={Style.searchItem} onClick={() => setMusic(item)}>
              {item.image === null 
                ? <img src={undefIcon} alt={item.id} className={Style.undef}/> 
                : <img src={item.image} alt={item.id} />}
              <h2>{item.name}</h2>
            </div>
          ))}
      </div>}
    </div>
  );
}