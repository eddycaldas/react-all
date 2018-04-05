import React, { Component } from 'react';

class Option extends Component {
  
  render(props) {
    return (
      <div>
        {this.props.textOption}
        <button onClick={ (e) => {
          this.props.handleRemoveOne(this.props.textOption);
        } }>Remove</button>
      </div>
    );
  }
}

export default Option;
