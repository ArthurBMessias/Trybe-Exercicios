import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor() {
    super()

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      cavaleiroFavorito:'',
    }
  }

 handleTextAreaChange(event) {
    this.setState({ 
      estadoFavorito: event.target.value, 
    });
  }

  render() {
    return (
      <div>
        <h1> Estados e React Bla Bla Bla</h1>
        <form className='form'>
          <label>
            Diga seu bla bla
            <textarea name='estadoFavorito' value={this.state.estadoFavorito} onChange={this.handleTextAreaChange} />
          </label>

          <label>
            Email
            <input name='email' type='email' />
          </label>

          <label>
            Nome
            <input name='nome' type='text' />
          </label>

          <label>
            Idade
            <input name='idade' type='number' />
          </label>

          <label>
            Vai vim?
            <input name='vaiComparecer' type='checkbox' />
          </label>

          <label>
            Escolha seu cavaleiro Favorito:
            <select name='cavaleiroFavorito'>
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