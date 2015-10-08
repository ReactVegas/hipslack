import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component, PropTypes } from 'react';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import { SIDEBAR_WIDTH, MESSAGE_INPUT_CONTAINER_HEIGHT } from 'constants/styles';
import { setMessageInput, toggleMessageFocused, toggleshowModal } from 'actions/ui';

const styles = {
  container: {
    top: 0,
    right: 0,
    position: 'fixed',
    left: SIDEBAR_WIDTH,
    bottom: MESSAGE_INPUT_CONTAINER_HEIGHT,
    alignItems: 'flex-end',
    display: 'flex'
  }
};

class MessageView extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    messageInput: PropTypes.string.isRequired,
    setMessageInput: PropTypes.func.isRequired,
    toggleMessageFocused: PropTypes.func.isRequired,
    toggleshowModal: PropTypes.func.isRequired,
    messageFocused: PropTypes.bool.isRequired,
    currentUser: PropTypes.object.isRequired
  }

  render() {
    const { messages, messageInput, setMessageInput, messageFocused, toggleshowModal, toggleMessageFocused, currentUser } = this.props;
    return (
      <div style={styles.container}>
        <MessageList messages={messages}/>
        <MessageInput
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          toggleMessageFocused={toggleMessageFocused}
          toggleshowModal={toggleshowModal}
          messageFocused={messageFocused}
          currentUser={currentUser}
        />
      </div>
    );
  }
}

function select(state) {
  const { data, ui } = state;
  return {
    messages: data.messages,
    messageInput: ui.messageInput,
    messageFocused: ui.messageFocused,
    currentUser: ui.currentUser
  };
}

function actions(dispatch) {
  return bindActionCreators({
    setMessageInput: setMessageInput,
    toggleMessageFocused: toggleMessageFocused,
    toggleshowModal: toggleshowModal
  }, dispatch);
}

export default connect(select, actions)(MessageView);
