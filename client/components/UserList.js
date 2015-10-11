import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component, PropTypes} from 'react';
import {getUsers, updateUser} from 'actions/data/users';
import {POLLING_INTERVAL} from 'helpers/network';
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
    getUsers: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getUsers();
    setInterval(this.props.getUsers, POLLING_INTERVAL);

    if (this.props.currentUser.id && this.props.currentUser.id !== 'optimistic') {
      setInterval(() => this.props.updateUser(this.props.currentUser, Date.now()), POLLING_INTERVAL);
    }
  }

  componentWillReceiveProps(nextProps) {
    let newUserID = nextProps.currentUser.id;
    let oldUserID = this.props.currentUser.id;

    if (newUserID !== oldUserID && newUserID !== 'optimistic') {
      setInterval(() => this.props.updateUser(this.props.currentUser, Date.now()), POLLING_INTERVAL);
    }
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
  let {ui, data} = state;
  return {
    currentUser: ui.currentUser,
    users: Object.values(data.users)
  };
}

function actions(dispatch) {
  return bindActionCreators({
    getUsers: getUsers,
    updateUser: updateUser
  }, dispatch);
}

export default connect(select, actions)(UserList);
