import React, { Component } from 'react';
import axios from 'axios';

export default class Fornecedor extends Component {
  constructor() {
    super();

    this.state = {
      razaoSocial: '',
      cnpj: '',
      lista: [],
    };

    this.carregaLista();
  }

  setRazaoSocial(e) {
    this.setState({
      razaoSocial: e.target.value,
    });
  }

  setCnpj(e) {
    this.setState({
      cnpj: e.target.value,
    });
  }

  salvar() {
    const fornecedor = {
      razaoSocial: this.state.razaoSocial,
      cnpj: this.state.cnpj,
    };
    axios
      .post('http://localhost:3000/add-fornecedor', fornecedor)
      .then(resp => {
        console.log(resp.data)
        this.carregaLista();
      });
  }

  carregaLista() {
    axios.get('http://localhost:3000/fornecedores')
      .then(resp => { 
        this.setState({
          lista: resp.data.fornecedores,
        });
        console.log(resp.data.fornecedores);
      });
  }

  montaConteudoTabela() {
    return this.state.lista.map(fornecedor => {
      return (
        <tr key={fornecedor._id}>
          <td>{fornecedor.cnpj}</td>
          <td>{fornecedor.razaoSocial}</td>
          <td>
            <button type="button" className="btn btn-danger">
              Remove
            </button>
            <button type="button" className="btn btn-warning">
              Atualiza
            </button>
          </td>
        </tr>
      )
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label> Razão Social </label>
          <input
            type="text"
            className="form-control"
            id="razaoSocial"
            value={this.state.razaoSocial}
            onChange={e => this.setRazaoSocial(e)}
          ></input>
        </div>

        <div className="form-group">
          <label>CNPJ</label>
          <input
            type="text"
            className="form-control"
            id="cnpj"
            value={this.state.cnpj}
            onChange={e => this.setCnpj(e)}
          ></input>
        </div>

        <div className="form-group">
          <button
            onClick={e => this.salvar()}
            type="button"
            className="btn btn-primary"
          >
            Salvar
          </button>
        </div>

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>CNPJ</th>
                <th>Razão Social</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.montaConteudoTabela()}
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}
