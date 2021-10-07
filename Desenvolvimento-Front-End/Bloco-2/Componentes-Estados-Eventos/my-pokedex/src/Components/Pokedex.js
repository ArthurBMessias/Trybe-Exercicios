import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: 0,
      fire: 0
    };
    this.handleButton = this.handleButton.bind(this);
    this.resetTotal = this.resetTotal.bind(this);
    this.handleFire = this.handleFire.bind(this);
    this.handlePsychic = this.handlePsychic.bind(this);
  }

  handleButton = () => {
    this.setState((prevState) => {
      return {
        pokemon: prevState.pokemon + 1,
      };
    });
  };

  handleFire = () => {
    this.setState((prevState) => {
      return {
        pokemon: prevState.pokemon + 1,
      };
    });
  };

  handlePsychic = () => {
    console.log('clicou no psiquico');
  };

  resetTotal = () => {
    this.setState({
      pokemon: 0,
    });
  };

  render() {
    const { pokemons } = this.props;
    let currentPokemon = this.state.pokemon;
    const allPokemonsLength = pokemons.map((item) => (
      <Pokemon key={item.id} pokemon={item} />
    )).length;

    const checkPokemons = () => {
      if (currentPokemon > allPokemonsLength - 1) {
        return this.resetTotal();
      } else {
        return currentPokemon;
      }
    };

    const checkFire = () => {
      if (currentPokemon === firePokemon) {
        this.firePokemon
    }

    const allPokemons = pokemons.map((item) => (
      <Pokemon key={item.id} pokemon={item} />
    ))[checkPokemons()];
    const firePokemon = pokemons
      .filter((pokemon) => pokemon.type === 'Fire')
      .map((item) => <Pokemon key={item.id} pokemon={item} />);
    // console.log(firePokemon);

    return (
      <div>
        <div style={pokedex}>{allPokemons}</div>
        <button style={btnStyle} onClick={this.handleButton}>
          Next Pokemon
        </button>
        <button style={btnStyle} onClick={this.resetTotal}>
          Reset
        </button>
        <button style={btnStyle} onClick={this.handleFire}>
          Fire
        </button>
        <button style={btnStyle} onClick={this.handlePsychic}>
          Psychic
        </button>
      </div>
    );
  }
}

const pokedex = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '10px 10px',
};

const btnStyle = {
  color: 'blue',
  marginLeft: '5px',
  background: 'rgb(254, 203, 60)',
  padding: '5px 5px',
  border: '1px solid black',
  barderRadius: '5px',
  cursor: 'pointer',
};

export default Pokedex;
