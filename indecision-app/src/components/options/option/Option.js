import React from 'react';

const Option = (props) => {
    return (
        <div >
          {props.optionText}
        </div>
      ); 
}
// Above Stateless functinal component. the keyword 'this' is not necesary.
// class Option extends Component {
//   render() {
//     return (
//       <div >
//         {
//             this.props.optionText
//         }
//       </div>
//     );
//   }
// }

export default Option;
