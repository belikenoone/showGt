import React,{useContext} from 'react';
import AppContext from '../store/context';
import { Link } from 'react-router-dom';
const Tile = ({item}) => {
    const poster = `https://www.themoviedb.org/t/p/w1280/${item.poster_path}`
    const {darkMode}=useContext(AppContext)
  return (
    <Link to={`${item.media_type}/${item.id}`} className={`h-80 w-56 shadow-sm snap-start  shadow-blackish  sliding-column hover:scale-110 transition-all hover:shadow-2xl ${darkMode?'shadow-whitish':'shadow-blackish'}`}>
      <img src={poster} alt={item.title} className="w-full"/>
    </Link>
  )
}

export default Tile;
