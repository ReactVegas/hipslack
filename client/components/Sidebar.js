import {Component} from 'react';
import UserList from 'components/UserList';
import {SIDEBAR_WIDTH} from 'constants/styles';

let styles = {
  container: {
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 999,
    color: 'white',
    position: 'fixed',
    overflowX: 'auto',
    paddingTop: '20px',
    width: SIDEBAR_WIDTH,
    backgroundColor: '#1F2933'
  }
};

class Sidebar extends Component {
  render() {
    return (
      <div style={styles.container}>
        <UserList />
      </div>
    );
  }
}

export default Sidebar;
