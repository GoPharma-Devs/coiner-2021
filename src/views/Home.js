import React from 'react'
import logo from "../img/CONGRESO.png";
import LogoCoiner from "../img/COINER.png";
import ListaComite from "../components/ListaComite";
function home() {
  return (
    <>
      <section className="App-contenedor">
        <div className="contenedor">
          <div className="contenedor-imagen-izquierda">
            <img src={logo} className="App-logo left" alt="logo" />
          </div>

          <div className="contenedor-texto">
            <h1>Reserva la Fecha</h1>
            <h2>25,26 y 27 de noviembre</h2>
          </div>

          <div className="contenedor-imagen-derecha">
            <img src={LogoCoiner} className="App-logo right" alt="logo" />
          </div>
        </div>
      </section>

      <section className="comite-contenedor">
        <h4>Conoce a nuestro </h4>
        <h2>COMITÉ CIENTÍFICO</h2>
        <br />
        <ListaComite />
      </section> 
    </>
  )
}

export default home
