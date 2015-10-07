import { Component } from 'react';
import User from 'components/User';
import { DEFAULT_USERS } from 'constants/data';

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
        <h1 style={styles.heading}>{`${DEFAULT_USERS.length} USERS ONLINE`}</h1>
        <ul>
          {DEFAULT_USERS.map((user) =>
            <User key={user.name} name={user.name}/>
          )}
        </ul>
      </div>
    );
  }
}

export default UserList;
