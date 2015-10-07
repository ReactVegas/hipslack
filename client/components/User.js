import { Component, PropTypes } from 'react';

const styles = {
  container: {
    marginBottom: 10
  },
  highlight: {
    color: '#A6E591'
  }
};

class User extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <li style={styles.container}>
        <span style={styles.highlight}>&#9679; </span>
        <span>{this.props.name}</span>
      </li>
    );
  }
}

export default User;
