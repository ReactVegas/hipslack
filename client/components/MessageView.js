import { Component } from 'react';
import MessageList from 'components/MessageList';
import { SIDEBAR_WIDTH } from 'constants/styles';

const messages = [
  {content: 'whatup?', author: 'john doe'},
  {content: 'chilling', author: 'jane doe'}
];

const styles = {
  container: {
    paddingLeft: SIDEBAR_WIDTH
  }
};

class MessageView extends Component {
  render() {
    return (
      <div style={styles.container}>
        <MessageList messages={messages}/>
      </div>
    );
  }
}

export default MessageView;
