import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component, PropTypes } from 'react';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import { SIDEBAR_WIDTH, INPUT_HEIGHT } from 'constants/styles';
import { setInputValue, toggleInputFocused } from 'actions/messages';

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
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    toggleInputFocused: PropTypes.func.isRequired,
    inputFocused: PropTypes.bool.isRequired
  }

  render() {
    const { messages, inputValue, setInputValue, inputFocused, toggleInputFocused } = this.props;
    return (
      <div style={styles.container}>
        <MessageList messages={messages}/>
        <MessageInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          toggleInputFocused={toggleInputFocused}
          inputFocused={inputFocused}
        />
      </div>
    );
  }
}

function select(state) {
  const { data, ui } = state;
  return {
    messages: data.messages,
    inputValue: ui.inputValue,
    inputFocused: ui.inputFocused
  };
}

function actions(dispatch) {
  return bindActionCreators({
    setInputValue: setInputValue,
    toggleInputFocused: toggleInputFocused
  }, dispatch);
}

export default connect(select, actions)(MessageView);
