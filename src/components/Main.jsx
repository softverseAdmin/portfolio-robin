import React from 'react';
import App from './App'; // Adjust the path as needed

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [], // Initialize with your data
      modalOpen: false,
    };    
  }

  render() {
    const styles = {
      main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      },
    };

    return (
      <div style={styles.main}>
        <App />
      </div>
    );
  }
}

export default Main;
