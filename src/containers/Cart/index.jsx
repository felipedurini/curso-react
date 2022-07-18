import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Shop } from '../../context/ShopContext'
import './style.css'

const Cart = () => {
  const {cart} = useContext(Shop)
  const precios=cart.map(x=>x.quantity*x.price)
  const {deleteItem} = useContext(Shop)

    if(!cart.length){
     return( 
     <>
        <h1 id='carrito-vacio'>El carrito está vacío</h1>
        <Link className='title' to='/'><button>Inicio</button></Link>
              
      </>   
     )
    }
else{
  return (
          <>
          <h1 id='title'>Total: {precios.reduce((acc,item)=>{return acc+item},0)}</h1>
        <div id='container'>
      {cart.map(item=>{
        return     <Card key={item.id} className='item-cart' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${item.img}`} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Precio: ${item.price}
          </Card.Text>
          <Card.Text>
            Cantidad: {item.quantity}
          </Card.Text>
          <Card.Text>
            Subtotal: ${item.price*item.quantity}
          </Card.Text>
          <Button onClick={()=>deleteItem(item)} variant="primary">Eliminar</Button>
        </Card.Body>
      </Card>
      })}
    </div>
    </>
  )
}
}

export default Cart