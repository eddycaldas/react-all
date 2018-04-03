import React, { Component } from 'react';

class Action extends Component {
  constructor(props) {
    super(props);
    this.handlePickOne = this.handlePickOne.bind(this);
  }
  
  handlePickOne()  {
    console.log('handlePickOne');
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handlePickOne}>What Should I Eat Today?</button>
      </div>
    );
  }
}

export default Action;
