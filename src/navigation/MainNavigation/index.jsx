import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import PageNotFound from '../../components/PageNotFound'
import Cart from '../../containers/Cart'
import ItemDetailContainer from '../../containers/ItemDetailContainer'
import ItemListContainer from '../../containers/ItemListContainer'

const MainNavigation = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default MainNavigation

