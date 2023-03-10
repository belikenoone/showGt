import React from 'react';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}from 'react-router-dom'
import About from './components/About';
import Navbar from './components/Navbar';
import SingleContent from './components/SingleContent';
import TrendingMovies from './components/TrendingMovies';
import { AppContextProvider } from './store/context';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar/>}>
    <Route index element={<TrendingMovies/>}/>
    <Route path=':media_type/:id' element={<SingleContent/>}/>
    <Route path='about' element={<About/>}/>
  </Route>
))
const App = () => {
  return (
    <AppContextProvider>
    <RouterProvider router={router}/>
    </AppContextProvider>
  );
}

export default App;
