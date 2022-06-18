import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={  <Home/>} />
      <Route path='/login' element={  <Login/>} />
      <Route path='/signup' element={  <Signup/>} />
     </Routes>
   
    </div>
  )
}

export default App
