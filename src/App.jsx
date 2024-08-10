import { useState } from 'react'
import NavBar from './assets/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/Home'
import CartPage from './assets/CartPage'
import Context from './Context'
function App() {

  return (
   <Router>
        <Context>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<CartPage/>}  />
          </Routes>
        </Context>
   </Router>
  )
}

export default App
