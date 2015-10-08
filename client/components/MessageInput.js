import { Component, PropTypes } from 'react';
import { SIDEBAR_WIDTH, INPUT_HEIGHT } from 'constants/styles';

const styles = {
  container: {
    right: 0,
    bottom: 0,
    left: SIDEBAR_WIDTH,
    height: INPUT_HEIGHT,
    backgroundColor: 'white',
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
  static propTypes = {
    input: PropTypes.string.isRequired,
    setInput: PropTypes.func.isRequired
  }

  render() {
    const { input, setInput } = this.props;
    return (
      <div style={styles.container}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          style={styles.input}
        />
      </div>
    );
  }
}

export default MessageInput;
