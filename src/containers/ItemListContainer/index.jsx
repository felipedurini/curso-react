import React, { useState,useEffect } from 'react'
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


  
const [characters, setCharacters] = useState(null)


useEffect(() => {
  const getCharacters = async()=>{
 try {
    const response=await task
    const data=await response.json()
    console.log(data)
    setCharacters(data)
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


return (
  <div>
  {characters ? 
    <ItemList characters={characters.results}/> 
    :
null
  }
</div>
)
}

export default ItemListContainer
