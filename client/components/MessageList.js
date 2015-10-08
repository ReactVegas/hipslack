import { Component, PropTypes } from 'react';
import Message from 'components/Message';

const styles = {
  container: {
    width: '100%',
    maxHeight: '100%',
    overflowY: 'scroll',
    padding: '15px 15px 5px'
  }
};

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  }

  render() {
    return (
      <div style={styles.container}>
        {this.props.messages.map((message, index) =>
          <Message key={index} message={message}/>
        )}
      </div>
    );
  }
}

export default MessageList;
