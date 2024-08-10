import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Context'
const NavBar = () => {
    const {cart} = useContext(Cart)
  return (
    <div className='bg-black p-3'>
          <ul className='flex gap-56 text-2xl text-white justify-center'>
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="/cart">Cart <span className='text-red-700'>({cart.length})</span></Link></li>
          </ul>
    </div>
  )
}

export default NavBar
