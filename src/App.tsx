import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorite from './components/Favorite';

export interface favoriteList{
  fav:String,
  whyFav:String
}

const App=()=> {
  const [favList, setFavList]= useState<favoriteList[]>([])
  console.log(favList)
  return (
    <div className="App m-[50px]">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home favList={favList} setFavList={setFavList}/>} />
            <Route path='favorite' element={<Favorite favList={favList} setFavList={setFavList}/>} />
          
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
