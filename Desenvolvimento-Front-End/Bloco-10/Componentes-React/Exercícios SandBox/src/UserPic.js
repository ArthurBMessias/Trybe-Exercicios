import React, { Component } from 'react';

class UserPic extends Component {
  render() {
    const avatar = this.props.avatar;
    
    return (<img src={avatar} alt='foto avatar'></img>)
  }
}

export default UserPic;