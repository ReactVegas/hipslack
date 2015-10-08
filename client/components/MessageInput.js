import { Component, PropTypes } from 'react';
import { SIDEBAR_WIDTH, MESSAGE_INPUT_CONTAINER_HEIGHT, INPUT_STYLES } from 'constants/styles';

const styles = {
  container: {
    right: 0,
    bottom: 0,
    left: SIDEBAR_WIDTH,
    height: MESSAGE_INPUT_CONTAINER_HEIGHT,
    backgroundColor: 'white',
    position: 'fixed',
    padding: '0 14px'
  },
  input: INPUT_STYLES
};

class MessageInput extends Component {
  static propTypes = {
    messageInput: PropTypes.string.isRequired,
    setMessageInput: PropTypes.func.isRequired,
    toggleMessageFocused: PropTypes.func.isRequired,
    toggleshowModal: PropTypes.func.isRequired,
    messageFocused: PropTypes.bool.isRequired,
    currentUser: PropTypes.object.isRequired
  }

  render() {
    const { messageInput, setMessageInput, messageFocused, toggleMessageFocused } = this.props;
    return (
      <div style={styles.container}>
        <input
          value={messageInput}
          onFocus={::this.handleFocus}
          onBlur={() => toggleMessageFocused(false)}
          onChange={(event) => setMessageInput(event.target.value)}
          style={{...styles.input, borderColor: messageFocused ? '#3699EE' : '#E0E0E0'}}
        />
      </div>
    );
  }

  handleFocus() {
    const { toggleMessageFocused, toggleshowModal, currentUser } = this.props;
    toggleMessageFocused(true);
    if (!currentUser.name) {
      toggleshowModal(true);
    }
  }
}

export default MessageInput;
