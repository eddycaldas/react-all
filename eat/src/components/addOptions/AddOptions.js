import React, { Component } from 'react';

class AddOptions extends Component {
  constructor(props) {
    super(props);
    this.handleOptions = this.handleOptions.bind(this);
    this.state = {
      error: undefined
    }
  }
  
  handleOptions(e) {
    e.preventDefault();  
    const newOption = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(newOption);
    this.setState(() => {
      return {
        error: error
      };
    });
    if(!error) {
      e.target.elements.option.value = '';
  }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOptions}>
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOptions;
