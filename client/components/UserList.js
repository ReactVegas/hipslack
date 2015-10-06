import { Component } from 'react';
import User from 'components/User';

const users = [
  {name: 'john doe'},
  {name: 'jane doe'}
];

const styles = {
  container: {
    padding: '0 15px'
  },
  heading: {
    marginBottom: 15,
    fontWeight: 'bold'
  }
};

class UserList extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>{`${users.length} USERS ONLINE`}</h1>
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
