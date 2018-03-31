import React, { Component } from 'react';
import Option from './option/Option';

class Options extends Component {
  render() {
    return (
    <div>
        <button>Remove All</button>
        {
            this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
        
    </div>
    );
  }
}

export default Options;
