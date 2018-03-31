import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Action from './components/action/Action';
import Options from './components/options/Options';
import AddOption from './components/addOption/AddOption';

class App extends Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life on the hands of a computer';
    const options = ['testOne', 'testTwo', 'testThree'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

export default App;
