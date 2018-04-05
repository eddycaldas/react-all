import React, { Component } from 'react';
import Option from './option/Option'

class Options extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleRemoveAll}>Remove All</button>
        {this.props.options.length === 0 && <p>Add an option to get started</p>}
        {
          this.props.options.map((option) => 
            <Option 
              key={option} 
              textOption={option}
              handleRemoveOne={this.props.handleRemoveOne}
            />
          )
        }
      </div>
    );
  }
}

export default Options;
