import React, { Component } from 'react';
import axios from 'axios';

export default class Fornecedor extends Component {
  constructor() {
    super();

    this.state = {
      _id: '',
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
    if (this.state._id) {
      // Atualizar
      axios
        .put(`http://localhost:3000/edit-fornecedor/${this.state._id}`, fornecedor)
        .then(resp => {
          this.carregaLista();
        });
    } else { // Inserir 
      axios
        .post('http://localhost:3000/add-fornecedor', fornecedor)
        .then(resp => {
          this.carregaLista();
        });
    }
    
    this.setState({
      _id: '',
      razaoSocial: '',
      cnpj: '',
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

  remover(fornecedor) {
    axios.delete(`http://localhost:3000/delete-fornecedor/${fornecedor._id}`)
      .then(resp => {
        this.carregaLista();
      });
  }

  atualizar(fornecedor) {
    const { cnpj, razaoSocial, _id } = fornecedor;

    this.setState({
      _id,
      cnpj,
      razaoSocial,
    })
  }

  montaConteudoTabela() {
    return this.state.lista.map(fornecedor => {
      return (
        <tr key={fornecedor._id}>
          <td>{fornecedor.cnpj}</td>
          <td>{fornecedor.razaoSocial}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.remover(fornecedor)}
            >
              Remove
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.atualizar(fornecedor)}
            >
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
