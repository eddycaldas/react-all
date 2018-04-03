import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Action from './components/action/Action';
import Options from './components/options/Options';
import AddOption from './components/addOption/AddOption';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['testOne', 'testTwo', 'testThree']
    };
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }

  handleDeleteOption() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life on the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}/>
        <Options 
        options={this.state.options}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption />
      </div>
    );
  }
}

export default App;
