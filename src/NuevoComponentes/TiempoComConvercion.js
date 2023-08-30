import React, { useState } from 'react';

function TiempoComConvercion() {
  const [seconds, setSeconds] = useState('');
  const [result, setResult] = useState('');

  const convercionTiempo = () => {
    const totalSegundos = parseInt(seconds);
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundosRestantes = totalSegundos % 60;

    setResult(`Conversión es igual a = ${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos.`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese segundos a convertir"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        style={{ width: '15em', height: '2em', textAlign: 'center', marginLeft: '10px' }}
      />
      <button onClick={convercionTiempo} style={{ marginLeft: '10px' }}>
        Comenzar Conversión
      </button>
      <p>{result}</p>
    </div>
  );
}

export default TiempoComConvercion;
