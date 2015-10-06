import { Component, PropTypes } from 'react';

const styles = {
  container: {
    marginBottom: 10
  }
};

class User extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <li style={styles.container}>{this.props.name}</li>
    );
  }
}

export default User;
