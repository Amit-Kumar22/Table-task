import React from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import ListItem from './Components/ListItem';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Login' element={ <Login /> } />
        <Route path='/' element={ <Signup /> } />
        <Route path='/Home' element={ <Home /> } />
        {/* <Route path='/Create' element={ <Create /> } />
        <Route path='/ListItem' element={ <ListItem /> } /> */}
      </Routes>
    </div>
  )
}

export default App
