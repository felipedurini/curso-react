import React, { useState } from 'react'
import swal from 'sweetalert'
import './style.css'


  /**
   * @property {function} onAdd adds an unit to the counter
   * @property {function} onDecrement removes an unit from the counter
   * @property {number} count number of products that will be added to cart
   */

const ItemCount = ({handleAdd, stock}) => {

    const [count, setCount]=useState(0)

    const onAdd= ()=> {
        if(count<stock){
        setCount(count+1)}
        else{
            swal({
              title:'No hay stock',
              text: 'Lo sentimos, pero este producto no está disponible por falta de stock',
              icon: 'warning',
              button: 'Aceptar',
              className:'swal'
            })
        }
    }

    const onDecrement= ()=> {
        if(count>1){
        setCount(count-1)}
        else{
          swal({
            title:'El mínimo es una unidad',
            text: 'Para agregar un producto al carrito debe seleccionar al menos una unidad del mismo',
            icon: 'warning',
            button: 'Aceptar',
            className:'swal'
          })
        }
    }

  return (
    <div>
      <p>{count}</p>

      <button id='minus' className='count-buttons' onClick={onDecrement}>-</button>
      
      <button id='add-to-cart' className='count-buttons' onClick={()=>handleAdd(count)}>Agregar al carrito</button>

      <button id='plus' className='count-buttons' onClick={onAdd}>+</button>

    </div>
  )
}

export default ItemCount
