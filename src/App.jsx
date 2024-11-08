import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import bg from './bg_neon.mp4';
import Home from './components/Home';
import Movieinfo from './components/movieinfo.jsx';
import MovieCard from './components/Moviecard.jsx';

const App = () => {
  const [showMoviecard, setshowMoviecard] = useState(true);

  const handleHide = () => {
    setshowMoviecard(!showMoviecard);
  };

  return (
<BrowserRouter>


    <div className='relative mx-8 h-screen'>
    {/* Video Background */}
    <video
      className=' fixed top-0 left-0 w-full h-full blur-sm object-cover -z-10'
      src={bg}  
      autoPlay
      loop
      muted
      playsInline
    >
      Your browser does not support the video tag.
    </video>


    <Routes>
<Route path='/' element={<Home />}/>
  <Route path='/Movieinfo:id' element={<Movieinfo />}/>
</Routes>
    
    
    
    </div>
    </BrowserRouter>
  )
}

export default App
