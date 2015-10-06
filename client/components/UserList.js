import { Component } from 'react';
import User from 'components/User';

const users = [
  {name: 'john doe'},
  {name: 'jane doe'}
];

class UserList extends Component {
  render() {
    return (
      <div>
        <h1>USERS ONLINE</h1>
        <ul>
          {users.map((user) =>
            <User key={user.name} name={user.name}/>
          )}
        </ul>
      </div>
    );
  }
}

export default UserList;
