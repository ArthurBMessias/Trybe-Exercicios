import React from 'react'

class NextPokemon extends React.Component {
    render() {
        return (
            <button style={btnStyle} onClick={this.handleButton}>
            Next Pokemon
          </button>
        )
    }
}

const btnStyle = {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: '5px',
    background: '#EF5350',
    paddingLeft: '1.1rem',
    paddingRight: '1.1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    border: '1px solid #fff0',
    borderRadius: '6px',
    cursor: 'pointer',
  };
  
export default NextPokemon;