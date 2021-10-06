import React from 'react';
import Pokemon from './Pokemon';
import data from '../data';

class Pokedex extends React.Component {
  render() {
    const allPokemons = data.map((item) => (
      <Pokemon key={item.id} pokemon={item} />
    ));

    return < div style={pokedex}>{allPokemons}</div>;
  }
}

const pokedex = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px  10px'
}
export default Pokedex;
