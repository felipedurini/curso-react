import React from 'react'

const ItemDetail = ({product}) => {
  return (<div>
  <h1>{product.name}</h1>
  <img src={product.image}/>
    <p>{product.status}</p>
    <p>{product.species}</p>
    <p>{product.gender}</p>
    </div>
    
  )
}

export default ItemDetail