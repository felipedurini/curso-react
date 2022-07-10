import React, { createContext, useState } from 'react'

export const Shop = createContext()

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState('Valor por defecto')

    const [cart, setCart] = useState([])

    const addItem = (product, qty) =>{
      console.log(`${product} , ${qty}`)
    }

  return (
    <Shop.Provider value={{estadoA, setEstadoA, addItem}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider