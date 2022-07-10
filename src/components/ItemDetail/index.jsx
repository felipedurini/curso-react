import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount'
import { Shop } from '../../context/ShopContext'
import './style.css'

const ItemDetail = ({product}) => {
  
  const {addItem} = useContext(Shop)
  console.log(addItem)

  const navigate = useNavigate();

  product.stock=10
  const [qtyAdded, setQty]=useState(0)


  const onConfirm = (qty) => {
    setQty(qty)
  }

  const handleNavigate = () => { 
    addItem(product, qtyAdded)
    navigate('/cart')
  }


console.log(qtyAdded)

  return (<div className='item-detail'>
  <h1>{product.name}</h1>
  <img src={product.image}/>
    <p>{product.status}</p>
    <p>{product.species}</p>
    <p>{product.gender}</p>
    {!qtyAdded?
    <ItemCount handleAdd={onConfirm} stock={product.stock} /> :
    <button onClick={handleNavigate}>Terminar compra</button>
    }
    </div>
    
  )
}

export default ItemDetail