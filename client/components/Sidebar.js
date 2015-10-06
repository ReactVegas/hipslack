import { Component } from 'react';
import UserList from 'components/UserList';

const styles = {
  container: {
    top: 0,
    left: 0,
    bottom: 0,
    color: 'white',
    overflow: 'auto',
    position: 'fixed',
    backgroundColor: '#1F2933'
  }
};

class Sidebar extends Component {
  render() {
    return (
      <div style={styles.container}>
        <UserList/>
      </div>
    );
  }
}

export default Sidebar;
