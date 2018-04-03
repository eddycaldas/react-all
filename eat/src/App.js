import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Action from './components/action/Action';
import Options from './components/options/Options';
import AddOptions from './components/addOptions/AddOptions'

class App extends Component {
  constructor() {
    super();
    this.state = {
      option: ['tacos', 'burritos', 'hamburgers']
    }
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }
  
  handleRemoveAll() {
    this.setState(() => {
      return {
        option: []
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Action hasOptions={this.state.option.length > 0}/>
        <Options 
          option={this.state.option}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOptions />
      </div>
    );
  }
}

export default App;
