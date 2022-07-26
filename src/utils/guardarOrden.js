import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"
import swal from 'sweetalert'

const guardarOrden = (cart, orden) => {
    
    //Primer paso: abrir un batch
    const batch = writeBatch(db)
    
    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = []
    
    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'products', productoEnCart.id))
        .then(async (documentSnapshot) => {
            //Generamos los datos del producto en tiempo real. Obtenemos el stock justo antes de guardar.
            const producto = {...documentSnapshot.data(), id: documentSnapshot.id};
            //Hacemos un update en caso que el stock supere a la cantidad.
            if (producto.stock >= productoEnCart.quantity) {
                batch.update(doc(db, 'products', producto.id) ,{
                    stock: producto.stock - productoEnCart.quantity
                })
            } else {
                outOfStock.push(producto)
            }
    
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                    //Recién hacemos el commit una vez que se genera la order
                    batch.commit().then(() => {
                        swal({
                            title:'Orden creada con éxito',
                            text: 'Se generó la orden con id ' + id ,
                            icon: 'success',
                            button: 'Aceptar',
                            className:'swal'
                          }) 
                    })
                }).catch((err) => {
                    swal({
                        title:'Un producto se encuentra fuera de stock',
                        text: 'No se pudo generar la orden debido a eso',
                        icon: 'error',
                        button: 'Aceptar',
                        className:'swal'
                      }) 
                })
            //Si tenemos productos fuera de stock al momento de generar la order avisamos al usuario
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                console.log(outOfStock)
                alert(`Productos fuera de stock: ${mensaje}`)
            }
        })
    })
}

export default guardarOrden;