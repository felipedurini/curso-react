import React, { useContext } from 'react'
import {ImCart} from 'react-icons/im'
import { Shop } from '../../context/ShopContext'

const CartWidget = ({value}) => {
  const {cart} = useContext(Shop)
  const ArrProductos=cart.map(x=>x.quantity)
  const totalProductos=ArrProductos.reduce((acc,item)=>{return acc + item}, 0)

  return (
    <div>
    <ImCart size={18}/>
    <span>{value=totalProductos}</span>
    </div>
  )
}

export default CartWidget