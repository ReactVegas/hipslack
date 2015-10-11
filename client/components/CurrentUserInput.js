import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component, PropTypes} from 'react';
import {inputStyles, BUTTON_STYLES} from 'helpers/styles';
import {setCurrentUserInput, toggleshowModal} from 'actions/ui';
import {createUser} from 'actions/data/users';

let styles = {
  title: {
    fontSize: 20,
    marginBottom: 20
  },
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
    toggleshowModal: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired
  }

  state = {
    focused: true
  }

  render() {
    let {currentUserInput, setCurrentUserInput} = this.props;
    return (
      <div>
        <div style={styles.title}>
          Join Hipslack so you can chat!
        </div>
        <input
          autoFocus={true}
          placeholder="Enter your name..."
          onBlur={() => this.setState({focused: false})}
          onFocus={() => this.setState({focused: true})}
          onChange={(event) => setCurrentUserInput(event.currentTarget.value)}
          style={inputStyles(this.state.focused)}
          value={currentUserInput}
        />
        <button style={styles.button} onClick={::this.handleClick}>
          Join Hipslack!
        </button>
      </div>
    );
  }

  handleClick() {
    let {createUser, currentUserInput, setCurrentUserInput, toggleshowModal} = this.props;
    createUser(currentUserInput, Date.now());
    setCurrentUserInput('');
    toggleshowModal(false);
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
    toggleshowModal: toggleshowModal,
    createUser: createUser
  }, dispatch);
}

export default connect(select, actions)(CurrentUserInput);
