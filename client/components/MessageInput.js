import {Component, PropTypes} from 'react';
import {SIDEBAR_WIDTH, MESSAGE_INPUT_CONTAINER_HEIGHT, INPUT_STYLES} from 'constants/styles';

let styles = {
  container: {
    right: 0,
    bottom: 0,
    left: SIDEBAR_WIDTH,
    height: MESSAGE_INPUT_CONTAINER_HEIGHT,
    backgroundColor: 'white',
    position: 'fixed',
    padding: '0 14px'
  },
  input: INPUT_STYLES,
  inputFocus: {
    borderColor: '#3699EE'
  }
};

let ENTER_KEY_CODE = 13;

class MessageInput extends Component {
  static propTypes = {
    postMessage: PropTypes.func.isRequired,
    messageInput: PropTypes.string.isRequired,
    setMessageInput: PropTypes.func.isRequired,
    toggleshowModal: PropTypes.func.isRequired,
    toggleMessageFocused: PropTypes.func.isRequired,
    messageFocused: PropTypes.bool.isRequired,
    currentUser: PropTypes.object.isRequired
  }

  render() {
    let { messageInput, setMessageInput, toggleMessageFocused } = this.props;

    return (
      <div style={styles.container}>
        <input
          value={messageInput}
          onFocus={::this.handleFocus}
          onBlur={() => toggleMessageFocused(false)}
          onKeyDown={(event) => this.handleKeyDown(event)}
          onChange={(event) => setMessageInput(event.target.value)}
          style={this.inputStyle()}
        />
      </div>
    );
  }

  handleKeyDown(event) {
    let {postMessage, messageInput, currentUser, setMessageInput} = this.props;
    if (event.keyCode === ENTER_KEY_CODE) {
      postMessage(messageInput, currentUser.name);
      setMessageInput('');
    }
  }

  handleFocus() {
    let {toggleMessageFocused, toggleshowModal, currentUser} = this.props;
    toggleMessageFocused(true);
    if (!currentUser.name) {
      toggleshowModal(true);
    }
  }

  inputStyle() {
    if (this.props.messageFocused) {
      return {
        ...styles.input,
        ...styles.inputFocus
      };
    } else {
      return styles.input;
    }
  }
}

export default MessageInput;
