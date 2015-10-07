import { Component } from 'react';
import { SIDEBAR_WIDTH, INPUT_HEIGHT } from 'constants/styles';

const styles = {
  container: {
    right: 0,
    bottom: 0,
    left: SIDEBAR_WIDTH,
    height: INPUT_HEIGHT,
    position: 'fixed',
    padding: '0 14px'
  },
  input: {
    fontSize: 14,
    width: '100%',
    borderRadius: 5,
    border: '2px solid #E0E0E0',
    padding: '6px 8px'
  }
};

class MessageInput extends Component {
  render() {
    return (
      <div style={styles.container}>
        <input style={styles.input}/>
      </div>
    );
  }
}

export default MessageInput;
