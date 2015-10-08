import {Component} from 'react';
import Modal from 'components/Modal';
import Sidebar from 'components/Sidebar';
import MessageView from 'components/MessageView';
import CurrentUserInput from 'components/CurrentUserInput';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <MessageView />
        <Modal>
          <CurrentUserInput />
        </Modal>
      </div>
    );
  }
}

export default App;
