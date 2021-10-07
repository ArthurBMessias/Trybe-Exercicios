import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {pokemon} = this.props;
    const { name, type, averageWeight, image } = pokemon;
    return (
      <div style={container}>
          <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          {averageWeight.value} {averageWeight.measurementUnit}
        </p>
        </div>
        <img src={image} alt={name}></img>
      </div>
    );
  }
}

const container = {
    display: 'flex',
    flexWrap: 'wrap',
    border: '2px solid grey',
    borderRadius: '5px',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px',
    minWidth: '25%',
    marginBottom: '10px',

}

const cards = {
    display: 'flex',
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
