import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
import './style.css'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'
import automaticSave from '../../utils/guardarProductos'

const ItemListContainer = ({greeting}) => {

  
const [productos, setProductos] = useState([])
const [productosFiltrados, setProductosFiltrados] = useState([])
const params= useParams() 


useEffect(() => {
  const getCharacters = async()=>{
 try {

  /* automaticSave() */

    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    const productos = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      productos.push({ id: doc.id, ...doc.data() })
    });

    console.log(productos);
    // const response = await fetch('https://fakestoreapi.com/products');
    // const data = await response.json()
    setProductos(productos);
    setProductosFiltrados(productos);
  } catch (error) {
  console.log(error)
  }
  }
  
  /* const task= new Promise((res,rej)=>{
    setTimeout(() => {
      res(fetch('http://localhost:8000/array'))
    }, 2000);
    }) */
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
<p>Loading...</p>
  }
</div>
)
}

export default ItemListContainer
