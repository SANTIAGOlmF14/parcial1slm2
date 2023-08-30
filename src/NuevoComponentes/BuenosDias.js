import React, { useState } from 'react';

function DiasBuenos() {
  const [nombre, setNombre] = useState('');
  const [horas, setHoras] = useState('');
  const [DiasBuenos, setDiasBuenos] = useState('');

  const generateDiasBuenos = () => {
    const horavalor = parseInt(horas);
    if (horavalor >= 1 && horavalor <= 11) {
      setDiasBuenos(`Buenos días, ${nombre}.`);
    } else if (horavalor >= 12 && horavalor <= 17) {
      setDiasBuenos(`Buenas tardes, ${nombre}.`);
    } else if (horavalor >= 18 && horavalor <= 24) {
      setDiasBuenos(`Buenas noches, ${nombre}.`);
    } else {
      setDiasBuenos('Ingrese una hora válida (1-24).');
    }
  };

  const restringir = (e) => {
    const input = e.target.value;
    if (input === '' || (/^\d*$/.test(input) && input >= 1 && input <= 24)) {
      setHoras(input);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        style={{ width: '17em', height: '2em', textAlign: 'center', marginLeft: '10px' }}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingrese la hora (1-24)"
        value={horas}
        style={{ width: '17em', height: '2em', textAlign: 'center', marginLeft: '10px' }}
        onChange={restringir}
      />
      <button
        onClick={generateDiasBuenos}
        style={{ width: '10em', height: '2em', textAlign: 'center', marginLeft: '10px' }}
      >
        Generar Saludo
      </button>
      <p>{DiasBuenos}</p>
    </div>
  );
}

export default DiasBuenos;
