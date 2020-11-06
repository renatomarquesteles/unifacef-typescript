import React, { useState } from 'react';

export default function Exemplo1() {
  // vamos criar uma variável
  const [contador, setContador] = useState(0);

  // retorna o conteúdo
  return (
    <div>
      Valor do contador: {contador}
      <button type="button" onClick={() => setContador(contador+1)}>
        Incrementar
      </button>
      <button type="button" onClick={() => setContador(contador-1)}>
        Decrementar
      </button>
    </div>
  )
}
