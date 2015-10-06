import { Component } from 'react';

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
        yolo
      </div>
    );
  }
}

export default Sidebar;
