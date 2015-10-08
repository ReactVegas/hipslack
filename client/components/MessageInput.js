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
    padding: '6px 8px',
    border: '2px solid #E0E0E0'
  }
};

class MessageInput extends Component {
  static propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    toggleInputFocused: PropTypes.func.isRequired,
    inputFocused: PropTypes.bool.isRequired
  }

  render() {
    const { inputValue, setInputValue, inputFocused, toggleInputFocused } = this.props;
    return (
      <div style={styles.container}>
        <input
          value={inputValue}
          onBlur={() => toggleInputFocused(!inputFocused)}
          onFocus={() => toggleInputFocused(!inputFocused)}
          onChange={(event) => setInputValue(event.target.value)}
          style={{...styles.input, borderColor: inputFocused ? '#72C4FC' : '#E0E0E0'}}
        />
      </div>
    );
  }
}

export default MessageInput;
