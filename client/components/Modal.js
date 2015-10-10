import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component, PropTypes} from 'react';
import {toggleshowModal} from 'actions/ui';

let styles = {
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    zIndex: 9999,
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  content: {
    borderRadius: 5,
    backgroundColor: 'white',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: 150,
    minHeight: 200,
    maxWidth: 500,
    padding: 40
  }
};

class Modal extends Component {
  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    toggleshowModal: PropTypes.func.isRequired,
    currentUser: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }

  componentWillMount() {
    if (!this.props.currentUser) {
      this.props.toggleshowModal(true);
    }
  }

  render() {
    if (this.props.showModal) {
      return (
        <div style={styles.container}>
          <div style={styles.content}>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

function select(state) {
  return {
    showModal: state.ui.showModal,
    currentUser: state.ui.currentUser
  };
}

function actions(dispatch) {
  return bindActionCreators({
    toggleshowModal: toggleshowModal
  }, dispatch);
}

export default connect(select, actions)(Modal);
