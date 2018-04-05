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
      options: []
    }
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
  }
  
  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    
    if(options) {
      this.setState(() => ({ options: options }))
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json)
  }
  
  
  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  
  handleRemoveOne(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }
  
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber]
    alert(option)
  }
  
  handleAddOption(option) {
    if(!option) {
      return "Enter valid value to add"
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    } else {    
    this.setState((prevState) => {
      return {
      options: prevState.options.concat([option])
    }
    })
  }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOne={this.handleRemoveOne}
        />
        <AddOptions 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

export default App;
