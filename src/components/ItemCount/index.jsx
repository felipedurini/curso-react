import React, { useState } from 'react'

const ItemCount = ({handleAdd, initial, stock}) => {

    const [count, setCount]=useState(0)

    const onAdd= ()=> {
        if(count<stock){
        setCount(count+1)}
        else{
            alert('No hay suficiente stock')
        }
    }

    const onDecrement= ()=> {
        if(count>1){
        setCount(count-1)}
        else{
            alert('El minimo es una unidad')
        }
    }

  return (
    <div>
      <p>{count}</p>

      <button onClick={onAdd}>+</button>
      
      <button onClick={()=>handleAdd(count)}>Agregar al carrito</button>

      <button onClick={onDecrement}>-</button>

    </div>
  )
}

export default ItemCount
