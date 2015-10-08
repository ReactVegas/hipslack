import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import User from 'components/User';

const styles = {
  container: {
    padding: '0 15px'
  },
  heading: {
    marginBottom: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
};

class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  }

  render() {
    const { users } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.heading}>
          {`${users.length} Users Online`}
        </div>
        {users.map((user, index) =>
          <User key={index} user={user} />
        )}
      </div>
    );
  }
}

function select(state) {
  return {
    users: state.data.users
  };
}

export default connect(select)(UserList);
