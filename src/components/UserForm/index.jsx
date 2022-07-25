import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Shop } from '../../context/ShopContext';
import ordenGenerada from '../../utils/generarOrden';
import guardarOrden from '../../utils/guardarOrden';

const UserForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const {cart} = useContext(Shop)
  const {restart} = useContext(Shop)

  const precios=cart.map(x=>x.quantity*x.price)
  const total= precios.reduce((acc,item)=>{
   return acc+item
  },0)
 
  const [orden, setOrden]=useState({})

  const handleNombre = event => {
    const obj=orden
    obj.nombre=event.target.value
    console.log(obj)
    setOrden(obj);
  };
  const handleMail = event => {
    const obj=orden
    obj.mail=event.target.value
    console.log(obj)
    setOrden(obj);
  };
  const handleMail2 = event => {
    const obj=orden
    obj.mail2=event.target.value
    console.log(obj)
    setOrden(obj);
  };
const handleDireccion = event => {
  const obj=orden
  obj.direccion=event.target.value
  console.log(obj)
  setOrden(obj)
}
const handleTelefono = event => {
  const obj=orden
  obj.telefono=Number(event.target.value)
  console.log(obj)
  setOrden(obj)
}



  const confirmarOrden = async () => {
    if (orden.nombre && orden.direccion && orden.mail && orden.mail2 && orden.telefono){
      if(orden.mail !== orden.mail2){
        alert('No coinciden los correos electronicos')
      }
      else if(orden.nombre<=2){
        alert('El nombre debe contener al menos dos caracteres')
      }
      else if(!orden.mail.includes('@')){
        alert('Su correo electronico no contiene @')
      }
      else if(isNaN(orden.telefono) || orden.telefono.toString().length<8){
        alert('Ingrese un numero de telefono valido')
      }
      else{
        const nuevaOrden=ordenGenerada(orden.nombre, orden.direccion, cart, total , orden.mail, orden.telefono)
      guardarOrden(cart, nuevaOrden)
      restart()
      handleClose()
      setOrden({})
    }}
    else{
      if(isNaN(orden.telefono)){
        alert('Ingrese un numero de telefono valido')
      }
      else{alert('Hay al menos un campo vacio')}
    }

    
   /*  ordenGenerada(orden.nombre, orden.direccion, cart, orden.total, orden.mail);
     guardarOrden(cart, orden)
     restart() */
     
 //const docRef = await addDoc(collection(db, "orders"), orden);
   }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Terminar compra
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handleNombre}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={handleMail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirme su correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={handleMail2}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Direccion</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handleDireccion}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Telefono</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handleTelefono}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmarOrden}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserForm