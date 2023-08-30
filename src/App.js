import React from 'react';
import './App.css';
import TiempoComConvercion from './NuevoComponentes/TiempoComConvercion';
import LlamadaComCosto from './NuevoComponentes/LlamadaComCosto';
import BuenosDias from './NuevoComponentes/BuenosDias';

function App() {
  return (
    <div className="container">
      <h1>Parcial 1</h1>
      
      <div className="exercise">
        <h2>Ejercicio 1: Conversión de Tiempo</h2>
        <TiempoComConvercion />
      </div>
      
      <hr className="divider" />
      
      <div className="exercise">
        <h2>Ejercicio 2: Costo de Llamada Telefónica</h2>
        <LlamadaComCosto />
      </div>
      
      <hr className="divider" />
      
      <div className="exercise">
        <h2>Ejercicio 3: Saludo según la Hora del Día</h2>
        <BuenosDias />
      </div>
    </div>
  );
}

export default App;

