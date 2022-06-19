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
import { Mensdetails } from './pages/Mensdetails';
import { Cart } from './pages/Cart';
import { Womensdetails } from './pages/Womensdetails';
import { Kidsdetails } from './pages/Kidsdetails';
import RequiredAuth from './hoc/RequiredAuth';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={  <Home/>} />
      <Route path='/login' element={  <Login/>} />
      <Route path='/signup' element={  <Signup/>} />
      <Route path='/menspage' element={  <Mens/>} />
      <Route path='/menspage/:id' element={  <Mensdetails/>} />
      <Route path='/womenpage' element={  <Womens/>} />
      <Route path='/womenpage/:id' element={  <Womensdetails/>} />
      <Route path='/kidspage' element={  <Kids/>} />
      <Route path='/kidspage/:id' element={  <Kidsdetails/>} />
      <Route path='/cart' element={ <RequiredAuth> <Cart/></RequiredAuth>} />
     </Routes>
   
    </div>
  )
}

export default App
