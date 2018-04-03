import React, { Component } from 'react';
import Option from './option/Option'

class Options extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => 
            <Option key={option} textOption={option}/>
          )
        }
      </div>
    );
  }
}

export default Options;
