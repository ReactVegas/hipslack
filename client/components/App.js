import { Component } from 'react';
import Sidebar from 'components/Sidebar';
import MessageView from 'components/MessageView';

const styles = {
  container: {
    height: '100%'
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Sidebar/>
        <MessageView/>
      </div>
    );
  }
}

export default App;
