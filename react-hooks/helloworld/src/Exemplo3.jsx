import React from 'react'
import { useForm } from 'react-hook-form';

export default function Exemplo3() {
  // cria um registrador
  const { register, handleSubmit } = useForm();

  const calcular = (dados) => {
    const imc = dados.peso / Math.pow(dados.altura, 2);
    alert(imc);
  }
  
  return (
    <form onSubmit={handleSubmit(calcular)}>
      <div>
        <label htmlFor="peso">Peso</label>
        <input type="text" name="peso" ref={register} />
      </div>

      <div>
        <label htmlFor="altura">Altura</label>
        <input type="text" name="altura" ref={register} />
      </div>

      <div>
        <button type="submit">Calcular IMC</button>
      </div>
    </form>
  )
}
