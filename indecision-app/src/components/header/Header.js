import React from 'react';

const Header = (props) => {
    return (
        <div >
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
      );
}

Header.defaultProps = {
  title: "Decide for me"
}

// Above stateless functinal component. no need the usage of 'this'.
// class Header extends Component {
//   render() {
//     return (
//       <div >
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

export default Header;
