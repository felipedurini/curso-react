import logo from './logo.svg';
import './App.css';
//import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting='Wololo'/>
    </div>
  );
}

export default App;
