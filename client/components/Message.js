import {Component, PropTypes} from 'react';

let styles = {
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
    let {message} = this.props;
    return (
      <div style={styles.container}>
        <span style={styles.author}>{message.author}: </span>
        <span>{message.content}</span>
      </div>
    );
  }
}

export default Message;
