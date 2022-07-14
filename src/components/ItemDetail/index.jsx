import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/ShopContext'
import ItemCount from '../ItemCount'
import './style.css'

const ItemDetail = ({product}) => {

  const navigate = useNavigate();

  product.stock=10

  const [qtyAdded, setQty]=useState(0)

  const {addItem} = useContext(Shop)

  const onConfirm = (qty) => {
    setQty(qty)
    addItem(product, qty)
  }

  const handleNavigate = () => { 
    navigate('/cart')
  }

  return (<div className='item-detail'>
  <h1>{product.nombre}</h1>
  <img src={product.img}/>
    <p>${product.precio}</p>
    {!qtyAdded?
    <ItemCount handleAdd={onConfirm} stock={product.stock} /> :
    <button onClick={handleNavigate}>Terminar compra</button>
    }
    </div>
    
  )
}

export default ItemDetail