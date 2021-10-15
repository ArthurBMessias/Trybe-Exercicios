import React from 'react';

class Image extends React.Component {
  render() {
    const {source, alternativeText} = this.props.info
    return <img src={source} alt={alternativeText} />;
  }
}

export default Image;

