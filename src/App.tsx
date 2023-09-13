import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorite from './components/Favorite';


const App:React.FC=()=> {

  return (
    <div className="App m-[50px]">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='favorite' element={<Favorite/>} />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
