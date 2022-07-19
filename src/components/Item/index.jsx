import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Item = ({producto}) => {
    const navigate=useNavigate()
    const {title, price, image} = producto
    const handeDetail= () => {
      navigate(`/detail/${producto.id}`)
    }
  return (
    <div className='item' onClick={handeDetail}>
<Card className='card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${image}`} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      ${price}    </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default Item