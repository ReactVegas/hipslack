import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component, PropTypes} from 'react';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import {SIDEBAR_WIDTH, MESSAGE_INPUT_CONTAINER_HEIGHT} from 'helpers/styles';
import {setMessageInput} from 'actions/ui';
import {postMessage} from 'actions/data';

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
    postMessage: PropTypes.func.isRequired,
    messageInput: PropTypes.string.isRequired,
    setMessageInput: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired
  }

  render() {
    let {messages, messageInput, setMessageInput, postMessage, currentUser} = this.props;
    return (
      <div style={styles.container}>
        <MessageList messages={messages} />
        <MessageInput
          postMessage={postMessage}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          currentUser={currentUser}
        />
      </div>
    );
  }
}

function select(state) {
  let {data, ui} = state;
  return {
    messages: data.messages,
    messageInput: ui.messageInput,
    currentUser: ui.currentUser
  };
}

function actions(dispatch) {
  return bindActionCreators({
    postMessage: postMessage,
    setMessageInput: setMessageInput
  }, dispatch);
}

export default connect(select, actions)(MessageView);
