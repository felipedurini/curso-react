import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Shop } from '../../context/ShopContext'
import './style.css'
import UserForm from '../../components/UserForm'


const Cart = () => {
  const {cart} = useContext(Shop)
  const precios=cart.map(x=>x.quantity*x.price)
  const {deleteItem} = useContext(Shop)



    if(!cart.length){
     return( 
     <>
        <h1 id='carrito-vacio'>El carrito está vacío</h1>
        <Link className='title' to='/'>


            <div className="wrapper">
  <div className="link-wrapper">
    <button id='inicio'>Inicio</button>
    <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
  
</div>
          
          </Link>
              
      </>   
     )
    }
else{
  return (
          <>
          <h1 id='title'>Total: ${precios.reduce((acc,item)=>{return acc+item},0)}</h1>
        <div id='container'>
      {cart.map(item=>{
        return     <Card key={item.id} className='item-cart' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${item.image}`} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            Precio: ${item.price}
          </Card.Text>
          <Card.Text>
            Cantidad: {item.quantity}
          </Card.Text>
          <Card.Text>
            Subtotal: ${item.price*item.quantity}
          </Card.Text>
          <Button id='delete' onClick={()=>deleteItem(item)} variant="primary">Eliminar</Button>
        </Card.Body>
      </Card>
      })}
    </div>
    <UserForm></UserForm>
    </>
  )
}
}

export default Cart