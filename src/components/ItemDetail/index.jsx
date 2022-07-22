import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/ShopContext'
import ItemCount from '../ItemCount'
import './style.css'

const ItemDetail = ({product}) => {

  const navigate = useNavigate();

  const [qtyAdded, setQty]=useState(0)

  const {addItem} = useContext(Shop)

  const onConfirm = (qty) => {
    if(qty>0){
    setQty(qty)
    addItem(product, qty)
    }
    else{
      alert('El minimo es una unidad')
    }
  }

  const handleNavigate = () => { 
    navigate('/cart')
  }

  return (<div className='item-detail'>
  <h1>{product.title}</h1>
  <img className='img-item-detail' src={product.image}/>
    <p>${product.price}</p>
    {!qtyAdded?
    <ItemCount handleAdd={onConfirm} stock={product.stock} /> :
    <button onClick={handleNavigate}>Terminar compra</button>
    }
    </div>
  )
}

export default ItemDetail