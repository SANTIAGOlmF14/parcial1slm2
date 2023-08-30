import React, { useState } from 'react';

function LlamadaComCosto() {
  const [duracion, setDuracion] = useState('');
  const [costo, setCosto] = useState('');

  const calcularcosto = () => {
    const DuracionLlamada = parseInt(duracion);
    let LlamadaComCosto = 0;

    if (DuracionLlamada < 3) {
      LlamadaComCosto = 100;
    } else {
      LlamadaComCosto = 100 + (DuracionLlamada - 3) * 50;
    }

    setCosto(`El costo de la llamada es de ${LlamadaComCosto} pesos.`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Duración de la llamada en minutos"
        value={duracion}
        style={{ width: '17em', height: '2em', textAlign: 'center', marginLeft: '10px' }}
        onChange={(e) => setDuracion(e.target.value)}
      />
      <button onClick={calcularcosto} style={{ marginLeft: '10px' }}>
        Calcular Costo de la llamada
      </button>
      <p>{costo}</p>
    </div>
  );
}

export default LlamadaComCosto;
