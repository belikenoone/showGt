import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../store/context';
const SearchItem = ({item}) => {
  const poster = item.poster_path
  ? `https://www.themoviedb.org/t/p/w1280/${item.poster_path}`
  : undefined;
  const {darkMode}=useContext(AppContext)
  return (
    <Link to={`${item.media_type}/${item.id}`} className={`h-72 w-56 overflow-hidden relative ${darkMode?'shadow-md shadow-whitish':'shadow-md shadow-blackish'}`}>
        {poster ? ( <img src={poster} alt={item.name} className="object-cover"/>):<span className={`${darkMode?'text-whitish':'text-smokey'}`}>Poster Not Available</span>}
        <span className='absolute bottom-0 left-0 w-full bg-[rgba(0,0,0.5)] z-20 text-whitish text-center text-xl py-3'>{item.name?item.name:item.title}</span>
    </Link>
  );
}

export default SearchItem;
