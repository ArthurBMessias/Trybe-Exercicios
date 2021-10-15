import React, { Component } from "react";
import EstadoFavorito from "./EstadoFavorito";

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      cavaleiroFavorito:'',
    }
  }

 handleChange({ target }) {
  const { name} = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({ 
      [name]: value, 
    });
  }


  render() {
    return (
      <div>
        <h1> Estados e React </h1>
        <form className='form'>
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={ this.handleChange }/>


          <label>
            Email
            <input name='email' value={this.state.email} onChange={this.handleChange} type='email' />
          </label>

          <label>
            Nome
            <input name='nome' value={this.state.nome} onChange={this.handleChange} type='text' />
          </label>

          <label>
            Idade
            <input name='idade' value={this.state.idade} onChange={this.handleChange}type='number' />
          </label>

          <label>
            Vai vim?
            <input name='vaiComparecer' value={this.state.vaiComparecer} onChange={this.handleChange}type='checkbox' />
          </label>

          <label>
            Escolha seu cavaleiro Favorito:
            <select name='cavaleiroFavorito' value={this.state.cavaleiroFavorito} onChange={this.handleChange}>
              <option value="ouro">Ouro</option>
              <option value="prata">Prata</option>
              <option value="bronze">Bronze</option>
              <option value="aço">Aço</option>
            </select>
          </label>

        </form>
      </div>
    )
  }
}

export default Form;