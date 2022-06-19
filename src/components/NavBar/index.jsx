import React from 'react'
import Input from '../Input'
import CartWidget from '../CartWidget'
import './style.css'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Bs As Customs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Detalles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sobre Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Redes Sociales</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nuestros Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Zapatillas Deportivas</a></li>
            <li><a class="dropdown-item" href="#">Zapatillas Urbanas Hombre</a></li>
            <li><a class="dropdown-item" href="#">Zapatillas Urbanas Mujer</a></li>
          </ul>
        </li>
        <li>
          <CartWidget/>
        </li>
      </ul>
  <Input/>
    </div>
  </div>
</nav>
  )
}

export default NavBar