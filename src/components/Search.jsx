import React, { useContext, useState,useRef } from "react";
import AppContext from "../store/context";
import SearchItem from "./SearchItem";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { searchContent, searchResults, clearSearchResults ,darkMode} =
    useContext(AppContext);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchValue.length>0){
      searchContent(searchValue);
      setSearchValue(""); 
    }
    else{
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
      }, 2000);
    }
    window.scroll(0,window.innerHeight*1)
    
  };
  return (
    <>
      <form className=" my-11 flex flex-col justify-center items-center" onSubmit={handleSubmit} >
      <h3 className={`text-2xl text-center py-4 ${darkMode?'text-whitish':'text-blackish'}`}>Search..</h3>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={`py-2 px-3 rounded-md outline ${darkMode?'outline-whitish':'outline-blackish'} `}
            placeholder="Search Here.."
          />
          <button className={`${darkMode? 'bg-whitish text-smokey':'bg-smokey text-white'} px-2 rounded-lg py-2 sm:py-0`}>Search</button>
          {searchResults && searchResults.length > 0 && (
            <button onClick={clearSearchResults} className={`${darkMode? 'bg-whitish text-smokey':'bg-smokey text-white'} px-2 rounded-lg py-2 sm:py-0`} >Clear</button>
          )}
        </div>
        {showMessage && (
          <span className={` py-3 text-center ${darkMode?'text-whitish':'text-smokey'}`}>Please Enter Something to search..</span>
        )}
      </form>
      {searchResults  ? (
        <div className="my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center" >
            {searchResults.map((result) => (
              <SearchItem item={result} key={result.id}/>
            ))}
          </div>
        </div>
      ):(<div className="text-4xl text-center">No results found</div>)}
    </>
  );
};

export default Search;
