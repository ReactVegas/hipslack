import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import { SIDEBAR_WIDTH, INPUT_HEIGHT } from 'constants/styles';

const styles = {
  container: {
    top: 0,
    right: 0,
    position: 'fixed',
    left: SIDEBAR_WIDTH,
    bottom: INPUT_HEIGHT,
    alignItems: 'flex-end',
    display: 'flex'
  }
};

class MessageView extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  }

  render() {
    return (
      <div style={styles.container}>
        <MessageList messages={this.props.messages}/>
        <MessageInput/>
      </div>
    );
  }
}

function select(state) {
  return { messages: state.data.messages };
}

export default connect(select)(MessageView);
