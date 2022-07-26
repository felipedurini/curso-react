import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Shop } from '../../context/ShopContext';
import ordenGenerada from '../../utils/generarOrden';
import guardarOrden from '../../utils/guardarOrden';
import './style.css'
import swal from 'sweetalert'


const UserForm = () => {

  const hasNumber = /\d/;  

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
    setOrden(obj);
  };
  const handleMail = event => {
    const obj=orden
    obj.mail=event.target.value
    setOrden(obj);
  };
  const handleMail2 = event => {
    const obj=orden
    obj.mail2=event.target.value
    setOrden(obj);
  };
const handleDireccion = event => {
  const obj=orden
  obj.direccion=event.target.value
  setOrden(obj)
}
const handleTelefono = event => {
  const obj=orden
  obj.telefono=Number(event.target.value)
  setOrden(obj)
}



  const confirmarOrden = async () => {
    if (orden.nombre && orden.direccion && orden.mail && orden.mail2 && orden.telefono){
      if(orden.mail !== orden.mail2){
        swal({
          title:'No coinciden los correos electrónicos',
          text: 'Por favor asegúrese de que coincidan los correos electrónicos',
          icon: 'error',
          button: 'Aceptar',
          className:'swal'
        })
      }
      else if(orden.nombre.length<=2){
        swal({
          title:'Su nombre es demasiado corto',
          text: 'Por favor ingrese un nombre y apellido válido',
          icon: 'error',
          button: 'Aceptar',
          className:'swal'
        })      }
      else if(orden.direccion.length<=5 || !hasNumber.test(orden.direccion)){
        swal({
          title:'Su direccion no es válida',
          text: 'Por favor ingrese una dirección válida',
          icon: 'error',
          button: 'Aceptar',
          className:'swal'
        })      }
      else if(!orden.mail.includes('@')){
        swal({
          title:'Su correo electrónico no es válido',
          text: `Su correo electrónico no contiene "@"`,
          icon: 'error',
          button: 'Aceptar',
          className:'swal'
        }) 
      }
      else if(isNaN(orden.telefono) || orden.telefono.toString().length<8){
        swal({
          title:'Su teléfono no es válido',
          text: 'Por favor no ingrese letras y escriba al menos 8 números',
          icon: 'error',
          button: 'Aceptar',
          className:'swal'
        }) 
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
        swal({
          title:'Su teléfono no es válido',
          text: 'Por favor no ingrese letras y escriba al menos 8 números',
          icon: 'error',
          button: 'Aceptar',
          className:'swal'
        }) 
      }
      else{swal({
        title:'Hay al menos un campo vacío',
        text: 'Por favor asegúrese de rellenar todos los campos',
        icon: 'error',
        button: 'Aceptar',
        className:'swal'
      }) 
      console.log(orden)
    }}

   }

  return (
    <>
      <Button id='confirmar-compra' variant="primary" onClick={handleShow}>
        Terminar compra
      </Button>

      <Modal id='modal' show={show} onHide={handleClose}>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Total: ${total}</Form.Label>
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