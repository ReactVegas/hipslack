import { Component, PropTypes } from 'react';
import { INPUT_HEIGHT } from 'constants/styles';
import Message from 'components/Message';

const styles = {
  container: {
    maxHeight: '100%',
    padding: `15px 15px ${INPUT_HEIGHT}px`,
    position: 'absolute',
    bottom: 0
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
