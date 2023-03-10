import React,{useContext} from 'react';
import AppContext from '../store/context';

const About = () => {
  const {darkMode}=useContext(AppContext)
  return (
    <div className={`font-bold text-6xl ${darkMode?'text-whitish':'text-smokey'} mt-16 text-center py-6`}>
      This is about page
    </div>
  );
}

export default About;
