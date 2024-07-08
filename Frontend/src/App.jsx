import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Villages from './Home/Villages';
import Carbon from './Home/Carbon';
import Data from './Home/Data';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/villages' element={<Villages/>}/>
        <Route path='/carbon' element={<Carbon/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
