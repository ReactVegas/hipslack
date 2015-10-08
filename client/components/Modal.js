import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component, PropTypes } from 'react';
import { toggleshowModal } from 'actions/ui';

const styles = {
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    zIndex: 9999,
    position: 'fixed',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    borderRadius: 5,
    backgroundColor: 'white',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: 150,
    minHeight: 300,
    maxWidth: 500,
    padding: 30
  }
};

class Modal extends Component {
  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    toggleshowModal: PropTypes.func.isRequired
  }

  render() {
    const { showModal, toggleshowModal } = this.props;
    return (
      <div style={{...styles.container, display: showModal ? 'block' : 'none'}} onClick={() => toggleshowModal(false)}>
        <div style={styles.content} onClick={(event) => event.stopPropagation()}>
          yolo
        </div>
      </div>
    );
  }
}

function select(state) {
  const { ui } = state;
  return {
    showModal: ui.showModal
  };
}

function actions(dispatch) {
  return bindActionCreators({
    toggleshowModal: toggleshowModal
  }, dispatch);
}

export default connect(select, actions)(Modal);
