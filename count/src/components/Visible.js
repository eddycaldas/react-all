import React, { Component } from 'react';

class Visible extends Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }      
    })
  }
  
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : "show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey, there are more detqils you can see!!</p>
          </div>
        )}

      </div>
    );
  }
}

export default Visible;
