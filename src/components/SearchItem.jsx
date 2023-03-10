import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../store/context';
const SearchItem = ({item}) => {
  const poster = item.poster_path
  ? `https://www.themoviedb.org/t/p/w1280/${item.poster_path}`
  : undefined;
  const {darkMode}=useContext(AppContext)
  return (
    <Link to={`${item.media_type}/${item.id}`} className={`h-72 w-56 overflow-hidden ${darkMode?'shadow-md shadow-whitish':'shadow-md shadow-blackish'}`}>
        {poster ? ( <img src={poster} alt={item.name} className="object-cover"/>):<span className={`${darkMode?'text-whitish':'text-smokey'}`}>Poster Not Available</span>}
    </Link>
  );
}

export default SearchItem;
