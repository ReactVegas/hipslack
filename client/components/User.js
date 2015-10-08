import {Component, PropTypes} from 'react';

let styles = {
  container: {
    marginBottom: 10
  },
  highlight: {
    color: '#A6E591'
  }
};

class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render() {
    return (
      <div style={styles.container}>
        <span style={styles.highlight}>&#9679; </span>
        <span>{this.props.user.name}</span>
      </div>
    );
  }
}

export default User;
