import React, { Component } from 'react';
import './App.css';
import Count from './components/Count';
import Visible from './components/Visible';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Count />
        <Visible />
      </div>
    );
  }
}

export default App;
