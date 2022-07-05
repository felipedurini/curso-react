import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
import './style.css'

const ItemListContainer = ({greeting}) => {

 /*  const handleAdd = (count) => {
    console.log(`se agregaron ${count} productos al carrito.`)
  }

  return (
    <div>
      <p>{greeting}</p>
      <ItemCount handleAdd={handleAdd} initial={1} stock={10}/>
    </div>
  ) */


  
const [characters, setCharacters] = useState([])
const [productosFiltrados, setProductosFiltrados] = useState([])
const params= useParams() 


useEffect(() => {
  const getCharacters = async()=>{
 try {
    const response=await task
    const data=await response.json()
    console.log(data)
    console.log(data.results)
    setCharacters(data.results);
    setProductosFiltrados(data.results);
  } catch (error) {
  console.log(error)
  }
  }
  
  const task= new Promise((res,rej)=>{
    setTimeout(() => {
      res(fetch('https://rickandmortyapi.com/api/character'))
    }, 2000);
    })
getCharacters()
},[])

useEffect(() => {
  if (params?.categoryId) {
    const productosFiltrados = characters.filter(producto => producto.species === params.categoryId)
    setProductosFiltrados(productosFiltrados)
  } else {
    setProductosFiltrados(characters)
  }
}, [params, characters])

console.log(characters)

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
