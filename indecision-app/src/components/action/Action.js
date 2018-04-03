import React, { Component } from 'react';

class Action extends Component {
    buttonClicked() {
        alert ('clicked')
    }
  render() {
    return (
      <div >
        <button 
            onClick={this.buttonClicked}
            disabled={!this.props.hasOptions}
            >
             What should I do?
        </button>
      </div>
    );
  }
}

export default Action;
