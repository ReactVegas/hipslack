import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component, PropTypes } from 'react';
import { INPUT_STYLES, BUTTON_STYLES } from 'constants/styles';
import { setCurrentUser } from 'actions/ui';

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
    currentUser: PropTypes.string.isRequired,
    setCurrentUser: PropTypes.func.isRequired
  }

  render() {
    const { currentUser, setCurrentUser } = this.props;
    return (
      <div>
        <div style={styles.title}>
          Join Hipslack so you can chat!
        </div>
        <input
          autoFocus={true}
          style={styles.input}
          placeholder="Enter your name..."
          onChange={(event) => setCurrentUser(event.target.value)}
          value={currentUser}
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
    currentUser: state.ui.currentUser
  };
}

function actions(dispatch) {
  return bindActionCreators({
    setCurrentUser: setCurrentUser
  }, dispatch);
}

export default connect(select, actions)(CurrentUserInput);
