import React,{useContext,useEffect} from 'react';
import AppContext from '../store/context';
import Search from './Search';
import Tile from './Tile';


const TrendingMovies = () => {
    const {trending,fetchTrending,darkMode}=useContext(AppContext)
    useEffect(()=>{
        fetchTrending()
    },[])
  return (
    <>
    <div className='mt-16 flex flex-col w-[80%] mx-auto'>
    <h2 className={`text-4xl ${darkMode?"text-whitish":"text-smokey"} py-3`}>Trending Today</h2>
    <div  className=' grid grid-flow-col gap-8 w-full mx-auto overflow-y-hidden overflow-x-scroll px-7 sliding-container  '>
      {trending.map((item)=>(
        <Tile item={item} key={item.id}/>
      ))}
    </div>
    <Search/>
    </div>
    </>
  );
}

export default TrendingMovies;
