import { Component } from 'react';
import Modal from 'components/Modal';
import Sidebar from 'components/Sidebar';
import MessageView from 'components/MessageView';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <MessageView/>
        <Modal/>
      </div>
    );
  }
}

export default App;
