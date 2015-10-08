import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component, PropTypes } from 'react';
import { setMessageValue } from 'actions/messages';
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
    messages: PropTypes.array.isRequired,
    setMessageValue: PropTypes.func.isRequired
  }

  render() {
    const { messages, setMessageValue } = this.props;
    return (
      <div style={styles.container}>
        <MessageList messages={messages}/>
        <MessageInput setValue={setMessageValue}/>
      </div>
    );
  }
}

function select(state) {
  return {
    messages: state.data.messages
  };
}

function actions(dispatch) {
  return bindActionCreators({
    setMessageValue: setMessageValue
  }, dispatch);
}

export default connect(select, actions)(MessageView);
