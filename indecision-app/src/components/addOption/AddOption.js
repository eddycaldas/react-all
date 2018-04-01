import React, { Component } from 'react';

class AddOption extends Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        //option.value = name of the element(input), grab its value
        if(option){
            alert(option);
        }
       
    }

  render() {
    return (
      <div >
       <form onSubmit={this.handleAddOption}>
        <input type='text' name='option'/>
        <button>Add Option</button>
       </form>
      </div>
    );
  }
}

export default AddOption;
