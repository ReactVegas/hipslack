import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component, PropTypes } from 'react';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import { SIDEBAR_WIDTH, MESSAGE_INPUT_CONTAINER_HEIGHT } from 'constants/styles';
import { setMessageValue, toggleMessageFocused, toggleshowModal } from 'actions/ui';

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
    messageValue: PropTypes.string.isRequired,
    setMessageValue: PropTypes.func.isRequired,
    toggleMessageFocused: PropTypes.func.isRequired,
    toggleshowModal: PropTypes.func.isRequired,
    messageFocused: PropTypes.bool.isRequired
  }

  render() {
    const { messages, messageValue, setMessageValue, messageFocused, toggleshowModal, toggleMessageFocused } = this.props;
    return (
      <div style={styles.container}>
        <MessageList messages={messages}/>
        <MessageInput
          messageValue={messageValue}
          setMessageValue={setMessageValue}
          toggleMessageFocused={toggleMessageFocused}
          toggleshowModal={toggleshowModal}
          messageFocused={messageFocused}
        />
      </div>
    );
  }
}

function select(state) {
  const { data, ui } = state;
  return {
    messages: data.messages,
    messageValue: ui.messageValue,
    messageFocused: ui.messageFocused
  };
}

function actions(dispatch) {
  return bindActionCreators({
    setMessageValue: setMessageValue,
    toggleMessageFocused: toggleMessageFocused,
    toggleshowModal: toggleshowModal
  }, dispatch);
}

export default connect(select, actions)(MessageView);
