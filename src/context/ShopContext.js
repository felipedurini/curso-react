import React, { createContext, useState } from 'react'

export const Shop = createContext()

const ShopProvider = ({children}) => {


    const [estadoA, setEstadoA] = useState('Valor por defecto')

    const [cart, setCart] = useState([])

    const addItem = (product, qty) =>{
      console.log(qty)
      const repeatedProduct=isInCart(product);
      if(repeatedProduct){
         repeatedProduct.quantity+=qty
            setCart([...cart])
                 
      }
      else{
        setCart([...cart, {...product, quantity:qty}]);
      }
    }

    const deleteItem = (product) => {
      if (product.quantity>1){
        product.quantity-=1
        setCart([...cart])
      }
      else{
      const updatedCart=cart.filter(item=>item.id!=product.id)
      setCart(updatedCart)
      }
    }

    const isInCart = (producto) => {
      return cart.find(element => element.id===producto.id)
    }

  return (
    <Shop.Provider value={{estadoA, setEstadoA, addItem, cart, deleteItem}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider