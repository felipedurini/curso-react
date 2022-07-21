import React, { useState } from 'react'

const ItemCount = ({handleAdd, stock}) => {

    const [count, setCount]=useState(1)

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

      <button onClick={onDecrement}>-</button>
      
      <button onClick={()=>handleAdd(count)}>Agregar al carrito</button>

      <button onClick={onAdd}>+</button>

    </div>
  )
}

export default ItemCount
