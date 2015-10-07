import { Component } from 'react';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import { SIDEBAR_WIDTH } from 'constants/styles';
import { DEFAULT_MESSAGES } from 'constants/data';

const styles = {
  container: {
    height: '100%',
    paddingLeft: SIDEBAR_WIDTH,
    position: 'relative'
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
