import { Component, PropTypes } from 'react';

const styles = {
  container: {
    marginBottom: 10
  },
  author: {
    fontWeight: 'bold'
  }
};

class Message extends Component {
  static propTypes = {
    message: PropTypes.shape({
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  }

  render() {
    const { message } = this.props;
    return (
      <li style={styles.container}>
        <span style={styles.author}>{message.author}: </span>
        <span>{message.content}</span>
      </li>
    );
  }
}

export default Message;
