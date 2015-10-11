import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component, PropTypes} from 'react';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import {SIDEBAR_WIDTH, MESSAGE_INPUT_CONTAINER_HEIGHT} from 'helpers/styles';
import {getMessages, createMessage} from 'actions/data/messages';
import {setMessageInput} from 'actions/ui';

let styles = {
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
    getMessages: PropTypes.func.isRequired,
    createMessage: PropTypes.func.isRequired,
    messageInput: PropTypes.string.isRequired,
    setMessageInput: PropTypes.func.isRequired,
    currentUser: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.getMessages();
    // setInterval(this.props.getMessages, 5000);
  }

  render() {
    let {messages, messageInput, setMessageInput, createMessage, currentUser} = this.props;
    return (
      <div style={styles.container}>
        <MessageList messages={messages} />
        <MessageInput
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          createMessage={createMessage}
          currentUser={currentUser}
        />
      </div>
    );
  }
}

function select(state) {
  let {data, ui} = state;
  return {
    currentUser: ui.currentUser,
    messageInput: ui.messageInput,
    messages: Object.values(data.messages)
  };
}

function actions(dispatch) {
  return bindActionCreators({
    getMessages: getMessages,
    createMessage: createMessage,
    setMessageInput: setMessageInput
  }, dispatch);
}

export default connect(select, actions)(MessageView);
