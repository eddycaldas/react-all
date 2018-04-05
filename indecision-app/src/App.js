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
    this.handleDeleteOne = this.handleDeleteOne.bind(this);
  }

  // its invoked immidiately after a component is mounted
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
      this.setState(() => ({ options: options }))
     }
    } catch (e) {
      //Do nothing at all
    }
    
  }

  // its invoked immidiately after updating occurs.
   componentDidUpdate(prevProps, prevState) {
     if(prevState.options.length !== this.state.options.length) {
       const json = JSON.stringify(this.state.options);
       localStorage.setItem('options', json)
     }
   }

  componentWillUnmount() {
    console.log('componentWillUnmount')
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

  handleDeleteOne(optionToRemove) {
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
          handleDeleteOne={this.handleDeleteOne}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

export default App;
