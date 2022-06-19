import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Mens } from './pages/Mens';
import { Womens } from './pages/Womens';
import { Kids } from './pages/Kids';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={  <Home/>} />
      <Route path='/login' element={  <Login/>} />
      <Route path='/signup' element={  <Signup/>} />
      <Route path='/menspage' element={  <Mens/>} />
      <Route path='/womenpage' element={  <Womens/>} />
      <Route path='/kidspage' element={  <Kids/>} />

     </Routes>
   
    </div>
  )
}

export default App
