import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList'
import './style.css'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'
import Loader from '../../components/Loader';
import swal from 'sweetalert'

/**
 * @property {function} getCharacters to get the products from database
 * 
 * 
 */

const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const [productosFiltrados, setProductosFiltrados] = useState([])
const params= useParams() 


useEffect(() => {
  const getCharacters = async()=>{
 try {



    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    const productos = []
    querySnapshot.forEach((doc) => {
      productos.push({ id: doc.id, ...doc.data() })
    });

    setProductos(productos);
    setProductosFiltrados(productos);
  } catch (error) {
    swal({
      title:'Ocurrió un error',
      text: 'No se pudo traer los productos desde la base de datos' ,
      icon: 'error',
      button: 'Aceptar',
      className:'swal'
    }) 
  }
  }
  
getCharacters()
},[])

useEffect(() => {
  if (params?.categoryId) {
    const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
    setProductosFiltrados(productosFiltrados)
  } else {
    setProductosFiltrados(productos)
  }
}, [params, productos])


return (

  <div className='item-list'>
  {productos.length !== 0 ? 
    <ItemList productos={productosFiltrados}/> 
    :
    <Loader></Loader>
  }
</div>
)
}

export default ItemListContainer
