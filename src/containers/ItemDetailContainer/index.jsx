import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const params = useParams()


    useEffect(() => {
      const getProducts = async() => {
        try {

      /*     const docRef = doc(db, "products", "j6EdRoO93ZimtrsonV1E");
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("Document data:",docSnap.id ,docSnap.data());
            console.log(docSnap.id);
            const productDetail = {id:docSnap.id, ...docSnap.data()}
            setProduct(productDetail)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          } 
 */

          const response= await fetch(`http://localhost:8000/array`)
          const data=await response.json()
          const answer=data[params.productId-1]
          setProduct(answer)
        } catch (error) {
          console.log(error)
        }
      }
      getProducts()
    }, [params])
  

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer
