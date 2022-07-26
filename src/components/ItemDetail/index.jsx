import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/ShopContext'
import ItemCount from '../ItemCount'
import './style.css'
import swal from 'sweetalert'

const ItemDetail = ({product}) => {

  /**
   * @property {function} onConfirm adds the selected amount of products to the cart
   * 
   */

  const navigate = useNavigate();

  const [qtyAdded, setQty]=useState(0)

  const {addItem} = useContext(Shop)

  const onConfirm = (qty) => {
    if(qty>0){
    setQty(qty)
    addItem(product, qty)
    }
    else{
      swal({
        title:'El mínimo es una unidad',
        text: 'Para agregar un producto al carrito debe seleccionar al menos una unidad del mismo',
        icon: 'warning',
        button: 'Aceptar',
        className: 'swal'
      })
    }
  }

  const handleNavigate = () => { 
    navigate('/cart')
  }

  return (<div className='item-detail'>
  <h2>{product.title}</h2>
  <img className='img-item-detail' alt='' src={product.image}/>
    <p>{product.description}</p>
    <p>${product.price}</p>
    {!qtyAdded?
    <ItemCount handleAdd={onConfirm} stock={product.stock} /> :
    <button id='finish' onClick={handleNavigate}>Terminar compra</button>
    }
    </div>
  )
}

export default ItemDetail