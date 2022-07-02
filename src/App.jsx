import logo from './logo.svg';
import './App.css';
//import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {
  return (
    <div className="App">

    <NavBar/>
    <ItemDetailContainer/>

     {/*
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/species/:categoryId' element={<ItemListContainer/>}></Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter> */}
    {/* <ItemListContainer greeting='Wololo'/> */}
    </div>
  );
}

export default App;
