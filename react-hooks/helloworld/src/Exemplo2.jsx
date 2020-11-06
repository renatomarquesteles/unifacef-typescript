import React, { useState } from 'react'

export default function Exemplo2() {
  // criar uma variável contendo os valores de inicialização
  const camposIniciais = {
    peso: 0,
    altura: 1,
    imc: 0,
  };

  // cria variável que pode ser alterada
  const [campos, setCampos] = useState(camposIniciais);

  const handleChange = (event) => {
    const nomeCampo = event.target.name;
    const valorCampo = event.target.value;

    setCampos({
      ...campos,
      [nomeCampo]: valorCampo,
    });
  }

  const calculaIMC = () => {
    const resultado = campos.peso / Math.pow(campos.altura, 2)
  
    setCampos({
      ...campos,
      imc: resultado,
    })
  }

  // retorna o formulário
  return (
    <div>
      <form>
        <div>
          <label htmlFor="peso">Peso</label>
          <input
            type="number"
            name="peso"
            value={campos.peso}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="altura">Altura</label>
          <input
            type="number"
            name="altura"
            value={campos.altura}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="button" onClick={calculaIMC}>Calcular IMC</button>
        </div>

        <div>
          <span>IMC: {campos.imc.toFixed(2)}</span>
        </div>
      </form>
    </div>
  )
}
