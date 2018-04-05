import React, { Component } from 'react';

class Header extends Component {
  render() {
    const title = 'Are you Hungry??';
    const subtitle = 'Let Me Pick up What You Should Eat';
    return (
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
  }
}

export default Header;
