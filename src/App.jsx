
import './App.css';
import ShopProvider from './context/ShopContext'
import MainNavigation from './navigation/MainNavigation';



function App() {
  return (
    <ShopProvider>

      <MainNavigation></MainNavigation>

    </ShopProvider>
  );
}

export default App;
