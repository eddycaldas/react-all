import React, { Component } from 'react';

class AddOption extends Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim(); 
        //option.value = name of the element(input), grab its value. trim takes space out from begining and end.
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return {
        //         error: error
        //     }
        // })

        this.setState(() => ( {error: error} ))
       
    }

  render() {
    return (
      <div >
      {this.state.error && <p>{this.state.error}</p>}
       <form onSubmit={this.handleAddOption}>
        <input type='text' name='option'/>
        <button>Add Option</button>
       </form>
      </div>
    );
  }
}

export default AddOption;
