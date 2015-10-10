import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component, PropTypes} from 'react';
import {getUsers} from 'actions/data';
import User from 'components/User';

let styles = {
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
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let {users} = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.heading}>
          {`${users.length} User${users.length === 1 ? '' : 's'} Online`}
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
    users: Object.values(state.data.users)
  };
}

function actions(dispatch) {
  return bindActionCreators({
    getUsers: getUsers
  }, dispatch);
}

export default connect(select, actions)(UserList);
