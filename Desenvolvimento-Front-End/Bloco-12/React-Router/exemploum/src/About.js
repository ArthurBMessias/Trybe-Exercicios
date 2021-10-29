import React, { Component } from "react";
import { Link } from "react-router-dom";


class About extends Component {
  render() {
    return (
      <div>
          <p>
            Se meu navio de React é de Jasão os filhos são os argonautas
          </p>
          <Link to='/'>Go Back</Link>
      </div>
    );
  }
}

export default About;