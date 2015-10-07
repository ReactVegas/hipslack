import { Component } from 'react';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import { SIDEBAR_WIDTH, INPUT_HEIGHT } from 'constants/styles';
import { DEFAULT_MESSAGES } from 'constants/data';

const styles = {
  container: {
    top: 0,
    right: 0,
    left: SIDEBAR_WIDTH,
    bottom: INPUT_HEIGHT,
    position: 'fixed',
    overflow: 'auto'
  }
};

class MessageView extends Component {
  render() {
    return (
      <div style={styles.container}>
        <MessageList messages={DEFAULT_MESSAGES}/>
        <MessageInput/>
      </div>
    );
  }
}

export default MessageView;
