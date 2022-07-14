import React, { createContext, useState } from 'react'

export const Shop = createContext()

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState('Valor por defecto')

    const [cart, setCart] = useState([])

    const addItem = (product, qty) =>{
      console.log(qty)
      const repeatedProduct=isInCart(product);
      if(repeatedProduct){
        
        
        /* setCart([...cart].filter(x=>x!=repeatedProduct)) */

         repeatedProduct.quantity+=qty
            setCart([...cart])
            console.log(product)
      }
      else{
        setCart([...cart, {...product, quantity:qty}]);
        console.log(product)
      }
    }

    const deleteItem = (product, qty) => {

      console.log('aaaa')

    }

    const isInCart = (producto) => {
      return cart.find(element => element.index===producto.index)
    }

  return (
    <Shop.Provider value={{estadoA, setEstadoA, addItem, cart}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider