import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Item = ({character}) => {
    const navigate=useNavigate()
    const {name, gender, image} = character
    const handeDetail= () => {
      navigate(`/detail/${character.id}`)
    }
  return (
    <div className='item' onClick={handeDetail}>
<Card className='card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {gender}    </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default Item