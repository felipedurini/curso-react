import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const params = useParams()


    useEffect(() => {
      const getProducts = async() => {
        try {
          const response= await fetch(`https://rickandmortyapi.com/api/character/${params.productId}`)
          const data=await response.json()
          setProduct(data)
        } catch (error) {
          console.log(error)
        }
      }
      getProducts()
    }, [params])
  

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer
