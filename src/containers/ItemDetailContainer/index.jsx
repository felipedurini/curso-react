import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    useEffect(() => {
      const getProducts = async() => {
        try {
          const response= await fetch('https://rickandmortyapi.com/api/character/2')
          const data=await response.json()
          setProduct(data)
        } catch (error) {
          console.log(error)
        }
      }
      getProducts()
    }, [])
  

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer
