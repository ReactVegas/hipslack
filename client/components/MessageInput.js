import {Component, PropTypes} from 'react';
import {inputStyles, SIDEBAR_WIDTH, MESSAGE_INPUT_CONTAINER_HEIGHT} from 'helpers/styles';

let styles = {
  container: {
    right: 0,
    bottom: 0,
    left: SIDEBAR_WIDTH,
    height: MESSAGE_INPUT_CONTAINER_HEIGHT,
    backgroundColor: 'white',
    position: 'fixed',
    padding: '0 14px'
  }
};

class MessageInput extends Component {
  static propTypes = {
    createMessage: PropTypes.func.isRequired,
    messageInput: PropTypes.string.isRequired,
    setMessageInput: PropTypes.func.isRequired,
    currentUser: PropTypes.string.isRequired
  }

  state = {
    focused: false
  }

  render() {
    let {messageInput, setMessageInput} = this.props;

    return (
      <div style={styles.container}>
        <input
          value={messageInput}
          onBlur={() => this.setState({focused: false})}
          onFocus={() => this.setState({focused: true})}
          onKeyDown={(event) => this.handleKeyDown(event)}
          onChange={(event) => setMessageInput(event.target.value)}
          style={inputStyles(this.state.focused)}
        />
      </div>
    );
  }

  handleKeyDown(event) {
    let enterKeyCode = 13;
    let {createMessage, messageInput, currentUser, setMessageInput} = this.props;
    if (event.keyCode === enterKeyCode) {
      createMessage(messageInput, currentUser);
      setMessageInput('');
    }
  }
}

export default MessageInput;
