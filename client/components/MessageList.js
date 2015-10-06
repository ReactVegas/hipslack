import { Component, PropTypes } from 'react';
import Message from 'components/Message';

const styles = {
  container: {
    padding: 15
  }
};

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object.isRequired)
  }

  render() {
    return (
      <ul style={styles.container}>
        {this.props.messages.map((message, index) =>
          <Message key={index} message={message}/>
        )}
      </ul>
    );
  }
}

export default MessageList;
