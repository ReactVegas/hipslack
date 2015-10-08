import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component, PropTypes } from 'react';
import { INPUT_STYLES, BUTTON_STYLES } from 'constants/styles';
import { setCurrentUserInput } from 'actions/ui';
import { postUser } from 'actions/ui';

const styles = {
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  input: INPUT_STYLES,
  button: {
    ...BUTTON_STYLES,
    float: 'right',
    marginTop: 10
  }
};

class CurrentUserInput extends Component {
  static propTypes = {
    currentUserInput: PropTypes.string.isRequired,
    setCurrentUserInput: PropTypes.func.isRequired,
    postUser: PropTypes.func.isRequired
  }

  render() {
    const { currentUserInput, setCurrentUserInput } = this.props;
    return (
      <div>
        <div style={styles.title}>
          Join Hipslack so you can chat!
        </div>
        <input
          autoFocus={true}
          style={styles.input}
          placeholder="Enter your name..."
          onChange={(event) => setCurrentUserInput(event.target.value)}
          value={currentUserInput}
        />
        <button style={styles.button} onClick={::this.handleClick}>
          Join Hipslack!
        </button>
      </div>
    );
  }

  handleClick() {
    return 'yolo';
  }
}

function select(state) {
  return {
    currentUserInput: state.ui.currentUserInput
  };
}

function actions(dispatch) {
  return bindActionCreators({
    setCurrentUserInput: setCurrentUserInput,
    postUser: postUser
  }, dispatch);
}

export default connect(select, actions)(CurrentUserInput);
