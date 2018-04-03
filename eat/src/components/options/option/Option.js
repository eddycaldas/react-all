import React, { Component } from 'react';

class Option extends Component {
  
  render() {
    return (
      <div>
        {
          this.props.textOption
        }
      </div>
    );
  }
}

export default Option;
