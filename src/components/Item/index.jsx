import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css'

const Item = ({character}) => {
    const {name, gender, image} = character
  return (
    <div className='item'>
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