import React from 'react';

const Action = (props) => {
    return (
        <div >
          <button 
              onClick={props.handlePick}
              disabled={!props.hasOptions}
              >
               What should I do?
          </button>
        </div>
      );
}

// Above: stateless function component. pass props on function and 'this' is not needed.
// class Action extends Component {
//   render() {
//     return (
//       <div >
//         <button 
//             onClick={this.props.handlePick}
//             disabled={!this.props.hasOptions}
//             >
//              What should I do?
//         </button>
//       </div>
//     );
//   }
// }

export default Action;
