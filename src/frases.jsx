import { useState, useEffect } from 'react';

function FrasesAnimadas()  {
  const frases = [
    'La práctica hace al maestro.',
    'Ya no se que frases mas poner.',
    'El trabajo duro supera al talento cuando el talento no trabaja duro.',
    'Constancia sobre talento.'
  ];

  const [indiceFrase, setIndiceFrase] = useState(0);
  const [textoVisible, setTextoVisible] = useState('');

  useEffect(() => {
    const fraseActual = frases[indiceFrase];
    let i = 0;

    const write = setInterval(() => {
      setTextoVisible(fraseActual.slice(0, i + 1) + '|');
      i++;

      if (i === fraseActual.length) {
        clearInterval(write);
        setTimeout(() => {
          setIndiceFrase((prev) => (prev + 1) % frases.length);
        }, 3000); 
      }
    }, 90);

    return () => clearInterval(write); 
  }, [indiceFrase]);

  return (
    <h1 className="text-xl md:text-2xl font-mono text-center mt-10 transition-all duration-500">
      {textoVisible}
    </h1>
  );
};

export default FrasesAnimadas;
