import React from 'react'
import Item from '../Item'
import './style.css'

const ItemList = ({characters}) => {
    return (
        <>{characters?.map(character=> <Item key={character.index} character={character}/>)}</>
  )
}

export default ItemList