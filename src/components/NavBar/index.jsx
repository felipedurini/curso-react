import React from 'react'
import Input from '../Input'
import CartWidget from '../CartWidget'
import './style.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Bs As Customs</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Detalles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sobre Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Redes Sociales</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nuestros Productos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Zapatillas Deportivas</a></li>
            <li><a className="dropdown-item" href="#">Zapatillas Urbanas Hombre</a></li>
            <li><a className="dropdown-item" href="#">Zapatillas Urbanas MujerName</a></li>
          </ul>
        </li>
        <li>
          <CartWidget value={2}/>
        </li>
      </ul>
  <Input/>
    </div>
  </div>
</nav>
  )
}

export default NavBar