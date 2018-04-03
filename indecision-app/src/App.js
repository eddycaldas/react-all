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
      options: []
    };
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  // handleDeleteOption() {
  //   this.setState(() => {
  //     return {
  //       options: []
  //     };
  //   });
  // }

  handleDeleteOption() {
    this.setState(() => ( {options: []} ));
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber]
    alert(option)
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    } else {
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat([option])
    //   };
    // });
    this.setState((prevState) => ( {
      options: prevState.options.concat([option])
    } ));
  }
  }

  render() {
    const subtitle = 'Put your life on the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

export default App;
