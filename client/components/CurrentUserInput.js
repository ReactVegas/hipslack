import { Component, PropTypes } from 'react';
import { INPUT_STYLES, BUTTON_STYLES } from 'constants/styles';

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
    currentUser: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <div style={styles.title}>
          Join Hipslack so you can chat!
        </div>
        <input style={styles.input}/>
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

export default CurrentUserInput;
