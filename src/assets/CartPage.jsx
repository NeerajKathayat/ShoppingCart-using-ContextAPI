import React, { useEffect, useState, useContext } from 'react'
import SingleProduct from './SingleProduct'
import { Cart } from '../Context'
const CartPage = () => {

    

    const [total , setTotal] = useState(0)

    const {cart} = useContext(Cart)
     
    useEffect(()=>{
      console.log("hwllo" ,cart)
      if (cart) {
        setTotal(cart.reduce((acc, ele) => acc + Number(ele.price), 0));
      }
    },[cart])

  return (
    <div style={{ textAlign: "center" }}>
    <span style={{ fontSize: 30 }}>My Cart</span>
    <br />
    <span style={{ fontSize: 30 }}>Total:₹  {total}</span>
    <div className="productContainer">
      {cart.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  </div>
  )
}

export default CartPage
