import { Component } from 'react';
import Sidebar from 'components/Sidebar';
import MessageView from 'components/MessageView';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <MessageView/>
      </div>
    );
  }
}

export default App;
