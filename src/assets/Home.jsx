import React,{useContext, useState} from 'react'
import {faker} from '@faker-js/faker'
import SingleProduct from './SingleProduct'
import { Cart } from '../Context'
faker.seed(100)
const Home = () => {

    const {cart,setCart} = useContext(Cart)

    const productsArray = [...Array(20)].map((ele)=>({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.business()
    }))

    const [prod] =useState(productsArray) 

    console.log(cart)

  return (
    <div style={{ textAlign: "center" }}>
         <span style={{ fontSize: 30 }}>Products Page</span>
         <div className="productContainer">
        {prod.map((ele)=>(
              <SingleProduct  prod={ele} cart={cart} setCart={setCart} />
        ))}
        </div>
    </div>
  )
}

export default Home
