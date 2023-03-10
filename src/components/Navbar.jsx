import React, { useContext,useState } from "react";
import {Link, NavLink, Outlet } from "react-router-dom";
import { BiMovie } from "react-icons/bi";
import AppContext from "../store/context";
import {MdOutlineNightlightRound,MdMenu} from 'react-icons/md'
import {BiSun} from 'react-icons/bi'

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const [showMenu,setShowMenu]=useState(false)
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  if (darkMode) {
    document.body.style.backgroundColor = "#0F0A0A";
  } else {
    document.body.style.backgroundColor = "#F5EFED";
  }
  return (
    <>
      <header
        className={`relative ${
          darkMode ? "bg-whitish text-blackish" : "bg-blackish text-whitish"} `}
      >
        <nav className="flex justify-between items-center w-[90%] mx-auto py-3 ">
          <Link to="/" className={`${darkMode?'text-blackish':'text-whitish'}`}>
            <BiMovie size={40} />
          </Link>
          <button  onClick={handleDarkMode}>{darkMode?<BiSun size={30}/>:<MdOutlineNightlightRound size={30}/>}</button>
          <div className={`links  flex gap-4 items-center absolute top-full    ${showMenu?'left-0':'-left-full'} ${darkMode?'bg-whitish':'bg-blackish'}  w-full flex-col  py-5 sm:static sm:flex-row sm:w-fit sm:py-0 transition-all duration-200 ease-in-out`}>
            <NavLink to="/"onClick={()=>setShowMenu(false)}>HOME</NavLink>
            <NavLink to="about" onClick={()=>setShowMenu(false)}>ABOUT</NavLink>
          </div>
          <button className={`flex sm:hidden transition-all duration-200 ease-in-out ${showMenu?'rotate-[360deg]':'rotate-0'}`} onClick={()=>setShowMenu(!showMenu)}>
            <MdMenu size={35}/>
          </button>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
