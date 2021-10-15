import React from "react";
import "./styles.css";



class App extends React.Component {
  constructor() {
    super()
    // this.handleClickMal = this.handleClickMal.bind(this)
    // this.state = {
    //   numeroDeCliques: 0
    // }
    
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDecliques: 0
    }

    // this.handleClickBem = this.handleClickBem.bind(this)
    // this.state = {
    //   numeroDeCliquesBem: 0
    // }
    
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDecliques: estadoAnterior.numeroDecliques + 1
    }))
    console.log('Clicou')
  };
  
  // handleClickMal() {
  //   this.setState((estadoAnterior, _props) =>({
  //     numeroDeCliques: estadoAnterior.numeroDeCliques + 1
  //   }))
  //   console.log('Clicou o Mal')
  // };

  // handleClickBem (){
  //   this.setState((estadoAnteriordoBem, _props) => ({
  //     numeroDeCliquesBem: estadoAnteriordoBem.numeroDeCliquesBem +1 
  //   }))
  //       console.log('Clicou o Bem')
  //     };

  render() {
    console.log(this)
    return (
      <div className="App">
          <button onClick={this.handleClick}> Meu Botao foi clicado { this.state.numeroDecliques } vezes</button>
          <button onClick={this.handleClick}> Meu Botao do Bem foi clicado { this.state.numeroDeCliques} vezes</button>
          <button onClick={this.handleClick}> Meu Botao do mal foi clicado { this.state.numeroDeCliques } vezes</button>
        </div>
      );

  }

}

export default App;