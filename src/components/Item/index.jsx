import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Item = ({character}) => {
    const navigate=useNavigate()
    const {nombre, precio, img} = character
    const handeDetail= () => {
      navigate(`/detail/${character.index}`)
    }
  return (
    <div className='item' onClick={handeDetail}>
<Card className='card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      ${precio}    </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default Item