import React, { useState } from 'react'
import ItemCount from '../../components/ItemCount'
import './style.css'

const ItemListContainer = ({greeting}) => {

  const handleAdd = (count) => {
    console.log(`se agregaron ${count} productos al carrito.`)
  }

  return (
    <div>
      <p>{greeting}</p>
      <ItemCount handleAdd={handleAdd} initial={1} stock={10}/>
    </div>
  )
}

export default ItemListContainer
