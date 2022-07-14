import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Shop } from '../../context/ShopContext'
import './style.css'

const Cart = () => {
  const {cart} = useContext(Shop)
  const precios=cart.map(x=>x.quantity*x.precio)
  const {deleteItem} = useContext(Shop)

  return (
          <>
          <h1 id='title'>Total: {precios.reduce((acc,item)=>{return acc+item},0)}</h1>
        <div id='container'>
      {cart.map(item=>{
        return     <Card key={item.index} className='item-cart' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
            Precio: ${item.precio}
          </Card.Text>
          <Card.Text>
            Cantidad: {item.quantity}
          </Card.Text>
          <Card.Text>
            Subtotal: ${item.precio*item.quantity}
          </Card.Text>
          <Button onClick={deleteItem()} variant="primary">Eliminar</Button>
        </Card.Body>
      </Card>
      })}
    </div>
    </>
  )
}

export default Cart