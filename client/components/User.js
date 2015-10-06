import { Component, PropTypes } from 'react';

class User extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

export default User;
