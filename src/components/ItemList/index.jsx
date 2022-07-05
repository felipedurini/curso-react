import React from 'react'
import Item from '../Item'
import './style.css'

const ItemList = ({characters}) => {
    return (
    <div>
        {characters?.map(character=> <Item key={character.id} character={character}/>)}
    </div>
  )
}

export default ItemList