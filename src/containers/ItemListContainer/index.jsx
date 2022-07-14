import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
import './style.css'

const ItemListContainer = ({greeting}) => {

  
const [characters, setCharacters] = useState([])
const [productosFiltrados, setProductosFiltrados] = useState([])
const params= useParams() 


useEffect(() => {
  const getCharacters = async()=>{
 try {
    const response=await task
    const data=await response.json()
    console.log(data)
    setCharacters(data);
    setProductosFiltrados(data);
  } catch (error) {
  console.log(error)
  }
  }
  
  const task= new Promise((res,rej)=>{
    setTimeout(() => {
      res(fetch('http://localhost:8000/array'))
    }, 2000);
    })
getCharacters()
},[])

useEffect(() => {
  if (params?.categoryId) {
    const productosFiltrados = characters.filter(producto => producto.categoria === params.categoryId)
    setProductosFiltrados(productosFiltrados)
  } else {
    setProductosFiltrados(characters)
  }
}, [params, characters])


return (
  <div className='item-list'>
  {characters.length !== 0 ? 
    <ItemList characters={productosFiltrados}/> 
    :
<p>Loading...</p>
  }
</div>
)
}

export default ItemListContainer
