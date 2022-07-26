import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import Loader from '../../components/Loader';
import './style.css'
import swal from 'sweetalert'

const ItemDetailContainer = () => {

  const [loaded, setLoaded] = useState(false);


    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(() => {
      let timer = setTimeout(() => setLoaded(true), 2000);
      return () => {
        clearTimeout(timer);
      };
    }, []);


    useEffect(() => {
      const getProducts = async() => {
        try {

         const docRef = doc(db, "products", params.productId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const productDetail = {id:docSnap.id, ...docSnap.data()}
            setProduct(productDetail)
          } else {
            // doc.data() will be undefined in this case
            swal({
              title:'Ocurrió un error',
              text: 'La base de datos no encontró este producto, es posible que haya sido eliminado' ,
              icon: 'error',
              button: 'Aceptar',
              className:'swal'
            }) 
          } 

        } catch (error) {
          swal({
            title:'Ocurrió un error inesperado',
            text: 'Ocurrió un error inesperado, no se pudo traer la información del producto desde la base de datos' ,
            icon: 'error',
            button: 'Aceptar',
            className:'swal'
          }) 
        }
      }
      getProducts()
    }, [params])
  

  return (
    <>
    {loaded ? 
      <ItemDetail product={product}/>
      :
      <Loader></Loader>
    }
</>
  )
}

export default ItemDetailContainer
