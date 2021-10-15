import React, { Component } from 'react';
import UserName from './UserName';
import UserOtherInfo from './UserOtherInfo';
import UserPic from './UserPic';

class Table extends Component {
  render () {
    const users = [{
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },
     {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },
    {
      id: 142,
      name: "Arthur",
      email: "arthur@gmail.com",
      avatar: "https://pbs.twimg.com/profile_images/619210103384838145/Xwlv0Z8i_400x400.jpg"
    },];

    return(
      users.map(user => (
        <section>
    <div>
      <UserName name={user.name} />
    </div>
    <div>
      <UserOtherInfo  email={user.email} id={user.id}/>
    </div>
    <div>
      <UserPic avatar={user.avatar}/>
    </div>
    </section>
    )))
  }
}

export default Table