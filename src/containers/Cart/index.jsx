import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'

const Cart = () => {
  const {cart} = useContext(Shop)
  return (
    <ul>
      {cart.map(item=>{
        return <li key={item.id}>{item.name} {item.quantity}</li>
      })}
    </ul>
  )
}

export default Cart