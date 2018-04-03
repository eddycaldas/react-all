import React, { Component } from 'react';

class AddOptions extends Component {
  constructor(props) {
    super(props);
    this.handleOptions = this.handleOptions.bind(this);
  }
  
  handleOptions(e) {
    e.preventDefault();  
    const newOption = e.target.elements.option.value;
    console.log(newOption);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOptions}>
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOptions;
