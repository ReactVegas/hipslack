import { Component } from 'react';
import Sidebar from 'components/Sidebar';

const styles = {
  container: {
    fontFamily: 'Arial, Helvetica, sans-serif'
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
